CREATE TABLE jurusan(
    kodejurusan VARCHAR PRIMARY KEY NOT NULL, 
    namajurusan VARCHAR NOT NULL
    );
    INSERT INTO jurusan(kodejurusan, namajurusan)VALUES('J001', 'perbankan'),
    ('J002', 'komputer'),
    ('J003', 'pariwisata');

CREATE TABLE mahasiswa(
    nim VARCHAR PRIMARY KEY NOT NULL, 
    name VARCHAR, 
    alamat VARCHAR, 
    jurusan VARCHAR,
    FOREIGN KEY(jurusan) REFERENCES jurusan(kodejurusan)
    );

INSERT INTO mahasiswa(nim, name, alamat, jurusan)VALUES("001", "Fahreza", "Cijerah", "J001"),
("002", "Herlan", "tasik", "J002"),
("003", "Faiz", "tangerang", "J003");


 
CREATE TABLE dosen(
    nip VARCHAR PRIMARY KEY NOT NULL,
    nama VARCHAR
    );

    INSERT INTO dosen(nip, nama)VALUES('D001', 'Rubi'),
    ("D002", "Lutfi");

CREATE TABLE matakuliah(
    kode_MK VARCHAR PRIMARY KEY NOT NULL,
     nama_MK VARCHAR,
      sks INTEGER 
      );
    
    INSERT INTO matakuliah(kode_MK, nama_MK, sks)VALUES('MK001', 'prancis', '3'),
    ("MK002", "basis data", "4"),
    ("MK003", "data mining", "3"),
    ("MK004", "perpajakan", "2");




CREATE TABLE kontrak (
    id INTEGER PRIMARY KEY autoincrement,
    nim VARCHAR NOT NULL,
    kode_MK VARCHAR NOT NULL,
    nip VARCHAR NOT NULL,
    nilai VARCHAR,
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim)
    FOREIGN KEY(kode_MK) REFERENCES matakuliah(kode_MK)
    FOREIGN KEY(nip) REFERENCES dosen(nip)
    );
    INSERT INTO kontrak(nim, kode_MK, nip)VALUES("001", "MK001", "D001"),
    ("001", "MK002", "D001"),
    ("001", "MK003", "D001"),
    ("002", "MK001", "D001");

    
UPDATE kontrak
SET nilai = "A"
WHERE id=1
;
UPDATE kontrak
SET nilai = "B"
WHERE id=2
;
UPDATE kontrak
SET nilai = "D"
WHERE id=3
;
UPDATE kontrak
SET nilai = "E"
WHERE id=4
;

--1 ) tampilkan semua data mahasiswa beserta jurusannya
 SELECT mahasiswa.nim, mahasiswa.name, mahasiswa.alamat, jurusan.namajurusan
FROM mahasiswa
INNER JOIN jurusan ON jurusan.kodejurusan=mahasiswa.jurusan;


-- 2. Menampilkan mahasiswa dengan umur dibawah 20 tahun DONE

ALTER TABLE mahasiswa
add COLUMN tanggal_lahir DATE
;
UPDATE mahasiswa
SET tanggal_lahir = '1995-09-24'
WHERE nim = '001'
;
UPDATE mahasiswa
SET tanggal_lahir = '1997-11-13'
WHERE nim = '002'
;
UPDATE mahasiswa
SET tanggal_lahir = '2003-04-02'
WHERE nim = '003'

SELECT mahasiswa.name,
    CASE
        WHEN (
            strftime('%M', 'now') > strftime('%M', tanggal_lahir)
        ) THEN (
            strftime('%Y', 'now') - strftime('%Y', tanggal_lahir)
        )
        WHEN (
            strftime('%M', 'now') = strftime('%M', tanggal_lahir)
        ) THEN CASE
            WHEN (
                strftime('%D', 'now') >= strftime('%D', tanggal_lahir)
            ) THEN (
                strftime('%Y', 'now') - strftime('%Y', tanggal_lahir)
            )
            ELSE (
                strftime('%Y', 'now') - strftime('%Y', tanggal_lahir)
            ) - 1
        END
        WHEN (
            strftime('%M', 'now') < strftime('%M', tanggal_lahir)
        ) THEN (
            strftime('%Y', 'now') - strftime('%Y', tanggal_lahir)
        ) - 1
    END AS 'Umur'
FROM mahasiswa
WHERE Umur < 20;
   

--3) tampilkan mahasiswa yang memiliki nilai "B" ke atas
    SELECT mahasiswa.name, mahasiswa.nim, kontrak.nilai
FROM mahasiswa
JOIN kontrak ON kontrak.nim=mahasiswa.nim
WHERE nilai = "A" OR "B";


--4.) TAMPILKAN JUMLAH MAHASISWA YANG MEMILIKI JUMLAH SKS LEBIH DARI 10
SELECT mahasiswa.nim, mahasiswa.name, SUM(matakuliah.sks) 
    as JUMLAH_SKS
    FROM mahasiswa 
    JOIN kontrak USING(nim) 
        JOIN matakuliah ON kontrak.kode_MK = matakuliah.kode_MK;


--5.) tampilkan mahasiswa yang mengontrak matakuliah "data mining"

SELECT mahasiswa.nim, mahasiswa.name, matakuliah.nama_MK 
    as kontrak_datamining
    FROM mahasiswa 
    JOIN kontrak USING(nim) 
        JOIN matakuliah ON kontrak.kode_MK = matakuliah.kode_MK
        WHERE nama_MK = "data mining";

-- 6. Menampilkan jumlah mahasiswa untuk setiap dosen 
        SELECT dosen.nama,
count (DISTINCT kontrak.nim)
FROM kontrak
    JOIN dosen ON dosen.nip = kontrak.nip
    GROUP BY kontrak.nip;

    -- 7. Mengurutkan mahasiswa berdasarkan umurnya DONE
SELECT mahasiswa.name,
    CASE
        WHEN (
            strftime('%M', 'now') > strftime('%M', tanggal_lahir)
        ) THEN (
            strftime('%Y', 'now') - strftime('%Y', tanggal_lahir)
        )
        WHEN (
            strftime('%M', 'now') = strftime('%M', tanggal_lahir)
        ) THEN CASE
            WHEN (
                strftime('%D', 'now') >= strftime('%D', tanggal_lahir)
            ) THEN (
                strftime('%Y', 'now') - strftime('%Y', tanggal_lahir)
            )
            ELSE (
                strftime('%Y', 'now') - strftime('%Y', tanggal_lahir)
            ) - 1
        END
        WHEN (
            strftime('%M', 'now') < strftime('%M', tanggal_lahir)
        ) THEN (
            strftime('%Y', 'now') - strftime('%Y', tanggal_lahir)
        ) - 1
    END AS 'Umur'
FROM mahasiswa
ORDER BY tanggal_lahir ASC;

-- 8. Menampilkan kontrak mata kuliah dengan nilai D dan E, serta tampilkan data mahasiswa jurusan dan dosen secara lengkap
SELECT mahasiswa.name AS Nama,
    jurusan.namaJurusan AS Jurusan,
    matakuliah.nama_MK AS MataKuliah,
    dosen.nama AS Dosen,
    kontrak.nilai AS Nilai
FROM kontrak
    JOIN mahasiswa ON kontrak.nim = mahasiswa.nim
    JOIN jurusan ON mahasiswa.jurusan = jurusan.kodeJurusan
    JOIN matakuliah ON kontrak.kode_MK = matakuliah.kode_MK
    JOIN dosen ON kontrak.nip = dosen.nip
WHERE nilai = 'D'
    OR nilai = 'E';