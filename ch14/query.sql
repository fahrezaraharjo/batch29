--s sqlite3 university.db
create table jurusan(
    kodejurusan varchar primary key not null, 
    namajurusan varchar not null
);
insert into jurusan(kodejurusan, namajurusan)values('j1', 'perbankan');--menambahkan
insert into jurusan(kodejurusan, namajurusan)values('j2', 'komputer');
insert into jurusan(kodejurusan, namajurusan)values('j3', 'pariwisata');

create table mahasiswa(
    nim varchar primary key not null, 
    name varchar, 
    alamat varchar, 
    jurusan varchar,
    FOREIGN KEY(jurusan) REFERENCES jurusan(kodejurusan)
    );

insert into mahasiswa(nim, name, alamat, jurusan)values("001", "eza", "cijerah", "j1");
insert into mahasiswa(nim, name, alamat, jurusan)values("002", "herlan", "tasik", "j2");
insert into mahasiswa(nim, name, alamat, jurusan)values("003", "faiz", "tangerang", "j3");

select * from mahasiswa
 
create table dosen(
    kodedosen varchar primary key not null,
 nama varchar
 );
insert into dosen(kodedosen, nama)values('d1', 'rubi');

create table matakuliah(
    kodematkul varchar primary key not null,
     nama varchar,
      sks integer
      );

insert into matakuliah(kodematkul, nama, sks)values('m1', 'ipa', '3');

-- foreign key ada key yang ada di setiap tabel
-
CREATE TABLE kontrak (
    id integer primary key autoincrement,
    nim varchar not null,
    kodematkul varchar not null,
    kodedosen varchar not null,
    nilai varchar,
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim)--key nim yang terdapat pada tabel mahasiswa dengan nama nim
    FOREIGN KEY(kodematkul) REFERENCES matakuliah(kodematkul)
    FOREIGN KEY(kodedosen) REFERENCES dosen(kodedosen)
    );
    insert into kontrak(nim, kodematkul, kodedosen)values("001", "m1", "d1");



