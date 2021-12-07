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

INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 1,'Thanh','Le',0792791623,0.872208377412266, 106.79009056436904,'KTX B',18/05/2020,'duong tinh','BINH DUONG',geography::Point(0.872208377412266, 106.79009056436904, 4326))
INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 2,'Cong','Nguyen',0862791632, 10.88350303088421, 106.78177951309968,'KTX B',18/05/2020,'duong tinh','BINH DUONG',geography::Point( 10.88350303088421, 106.78177951309968, 4326))
INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 3,'Thinh','Trinh',0892791642,10.869948, 106.796439,'UIT',19/05/2020,'duong tinh','BINH DUONG',geography::Point(10.869948, 106.796439, 4326))
INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 6,'Vuong','Le',0982791652,10.877118232703948, 106.8061529489715,'KTX khu A',19/05/2020,'duong tinh','BINH DUONG',geography::Point(10.877118232703948, 106.8061529489715, 4326))
INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 7,'Phu','Le Vuong',0902791672,10.880884858733538, 106.81056249035129,'KTX khu A',20/05/2020,'duong tinh','BINH DUONG',geography::Point(10.880884858733538, 106.81056249035129, 4326))
INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 8,'Alan','Le Van',0732791682,10.879167493886937, 106.80718230611217,'KTX khu A',21/05/2020,'duong tinh','BINH DUONG',geography::Point(10.879167493886937, 106.80718230611217, 4326))
INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 9,'Quy','Nguyen Van',0332791692,10.878077014753742, 106.80878198410016,'KTX khu A',22/05/2020,'duong tinh','BINH DUONG',geography::Point(10.878077014753742, 106.80878198410016, 4326))
INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 10,'Giau','Le Thi',0312791612,10.870227554543938, 106.79817236099483,'Nhan Van',18/05/2020,'duong tinh','BINH DUONG',geography::Point(10.870227554543938, 106.79817236099483, 4326))
INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 11,'Sang','Le Nguyen',0362792672,10.874884574652961, 106.7994427432682,'Tu Nhien',19/05/2020,'duong tinh','BINH DUONG',geography::Point(10.874884574652961, 106.7994427432682, 4326))
INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 12,'Vinh','Lam Le',0342791212,10.878667032944218, 106.80512159080315,'Bach Khoa',21/05/2020,'duong tinh','BINH DUONG',geography::Point(10.878667032944218, 106.80512159080315, 4326))
INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 13,'Hoa','Le Thuy',0122791112, 10.877160377034658, 106.8021906168956,'Quoc Te',20/05/2020,'duong tinh','BINH DUONG',geography::Point( 10.877160377034658, 106.8021906168956, 4326))