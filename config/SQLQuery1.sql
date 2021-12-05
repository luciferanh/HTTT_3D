create database dialy
use dialy
create table Nguoi_dung (
	ID int NOT NULL PRIMARY KEY,
	LastName varchar(255),
    FirstName varchar(255),
	MatKhau varchar(255),
	SDT varchar(10),
	x float,
	y float,
	tinhtrang varchar(255),
	DiaChi varchar(255),
    City varchar(255),
	Toa_do geography ,
)
create table HoDuongTinh (
	ID int NOT NULL PRIMARY KEY,
	LastName varchar(255),
    FirstName varchar(255),
	SDT varchar(10),
	x float,
	y float,
	DiaChi varchar(255),
	NgayBiDuongTinh smalldatetime,
	tinhtrang varchar(255),
    City varchar(255),
	Toa_do geography ,
)
Create table User_Ho(
	NguoiDungID int NOT NULL,
	HoID int NOT NULL,
	CONSTRAINT PK_KhoaChinh PRIMARY KEY (NguoiDungID, HoID),
	CONSTRAINT FK_ND FOREIGN KEY (NguoiDungID) REFERENCES Nguoi_dung(ID),
	CONSTRAINT FK_Ho FOREIGN KEY (HoID) REFERENCES HoDuongTinh(ID)
)
-- Thêm Nguoi Dung

INSERT INTO 
