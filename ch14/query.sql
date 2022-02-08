-- sqlite3 university.db
create table jurusan(
    kodejurusan varchar primary key not null, 
    namajurusan varchar not null
);
insert into jurusan(kodejurusan, namajurusan)values('j1', 'perbankan');--menambahkan

create table mahasiswa(
    nim varchar primary key not null, 
    name varchar, 
    alamat varchar, 
    jurusan varchar,
    FOREIGN KEY(jurusan) REFERENCES jurusan(kodejurusan)
    );

insert into mahasiswa(nim, name, alamat, jurusan)values("001", "eza", "cijerah", "komputer");
 
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

