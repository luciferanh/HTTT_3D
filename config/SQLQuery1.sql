create database dialy
use dialy
create table Nguoi_dung (
	ID int NOT NULL PRIMARY KEY,
	LastName varchar(255),
    FirstName varchar(255),
	MatKhau varchar(255),
	SDT varchar(10),
	x_diachi float,
	y_diachi float,
	tinhtrang varchar(255),
	DiaChi varchar(255),
    City varchar(255),
	Toa_do geography ,

)

create table HoDuongTinh (
	ID int NOT NULL PRIMARY KEY,
	LastName varchar(255),
    FirstName varchar(255),
	NamSinh int,
	SDT varchar(10),
	x float,
	y float,
	DiaChi varchar(255),
	NgayBiDuongTinh datetime,
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

INSERT INTO Nguoi_dung (ID,FirstName,LastName ,MatKhau,SDT,x_diachi,y_diachi,tinhtrang,DiaChi,City,Toa_do) VALUES (0,'Tran','Anh','123456','0832012355',10.869596,106.803244,'Âm tính','UIT','TpHCM',geography::Point(10.869596, 106.803244, 4326))

--Thêm ca bệnh
SET DATEFORMAT DMY  
INSERT INTO HoDuongTinh (ID,FirstName,LastName ,NamSinh,SDT,x,y,tinhtrang,DiaChi,NgayBiDuongTinh,City,Toa_do) VALUES (0,'Nguyen','Teo',1999,'0832012355',10.869948,106.796439,'Dương tính','UIT','18/05/2020','TpHCM',geography::Point(10.869948,106.796439, 4326))
INSERT INTO HoDuongTinh (ID,FirstName,LastName ,NamSinh,SDT,x,y,tinhtrang,DiaChi,NgayBiDuongTinh,City,Toa_do) VALUES (1,'Nguyen','Ti',1999,'0832012355',10.874842, 106.798475,'Dương tính','UIT','20/05/2020','TpHCM',geography::Point(10.874842, 106.798475, 4326))

