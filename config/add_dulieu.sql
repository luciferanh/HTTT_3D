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
VALUES ( 22,'Giau','Le Van',0333391612,10.86491719857306, 106.76366173290039,'Thu Duc',18/05/2020,'duong tinh','Ho Chi Minh',geography::Point(10.86491719857306, 106.76366173290039, 4326))
INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 23,'Sang','Nguyen',0364442672,10.859943922398136, 106.77147355951766,'Thu Duc',19/05/2020,'duong tinh','Ho Chi Minh',geography::Point(10.859943922398136, 106.77147355951766, 4326))
INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 26,'Vinh','Le',0344441212,10.87107045949965, 106.77844040766355,'Thu Duc',21/05/2020,'duong tinh','Ho Chi Minh',geography::Point(10.87107045949965, 106.77844040766355, 4326))
INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 25,'Hoa','Luy',0125551112, 10.864158568578794, 106.77902785338925,'Thu Duc',20/05/2020,'duong tinh','Ho Chi Minh',geography::Point( 10.864158568578794, 106.77902785338925, 4326))
INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 14,'Giau','Le Thuong',0316661612, 10.866392306931726, 106.78525802899426,'Thu Duc',18/05/2020,'duong tinh','Ho Chi Minh',geography::Point( 10.866392306931726, 106.78525802899426, 4326))
INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 15,'Sang','Le Nguyen Duc',0367772672,10.871154749864244, 106.77653938718642,'Thu Duc',19/05/2020,'duong tinh','Ho Chi Minh',geography::Point(10.871154749864244, 106.77653938718642, 4326))

INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 17,'Hoa','Thuy',0122791999, 10.877160377034658, 106.8021906168956,'Thu Duc',20/05/2020,'duong tinh','BINH DUONG',geography::Point( 10.877160377034658, 106.8021906168956, 4326))
INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 18,'Hoa','Duong Thi',0312791666,10.870227554543938, 106.79817236099483,'Thu Duc',18/05/2020,'duong tinh','BINH DUONG',geography::Point(10.870227554543938, 106.79817236099483, 4326))
INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 24,'Sang','Le Nguyen Phuc',0362792555,10.869721810427496, 106.77095951103124,'Thu Duc',19/05/2020,'duong tinh','BINH DUONG',geography::Point(10.869721810427496, 106.77095951103124, 4326))
INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 20,'Vinh','Lam Van',0342791444,10.87039613572559, 106.76932847030895,'Thu Duc',21/05/2020,'duong tinh','BINH DUONG',geography::Point(10.87039613572559, 106.76932847030895, 4326))
INSERT INTO HoDuongTinh ( ID,LastName,FirstName,SDT,x,y,DiaChi,NgayBiDuongTinh,tinhtrang,City,Toa_do) 
VALUES ( 21,'Hoa','Le Thu',0122791333, 10.86879461065435, 106.77482250221561,'Thu Duc',20/05/2020,'duong tinh','BINH DUONG',geography::Point( 10.86879461065435, 106.77482250221561, 4326))
