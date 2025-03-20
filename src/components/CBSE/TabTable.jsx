import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../Faculty/TabTable.css";

const tabData = [
    {
        title: "NOVA PUBLIC SCHOOL ID DETAILS",
        columns: [
            "S.No", "NAME", "DOB", "CLASS",
            "FATHER NAME", "PH.NO", "B.G", "ADDRESS"
        ],
        rows: [
            ["1", "JHANAV S", "02.03.2019", "1", "Suresh Babu S", "8940869056", "B+", "15a/2, Vallalar Nagar, Shanthimedu, Cbe-19"],
            ["2", "THISHAN SABARISH M M", "7.3.2018", "1", "Manikandan S", "9659673588", "A+", "29a, Csi Nagar, Press Colony, Cbe-19"],
            ["3", "SAI KANISHK K", "18.10.2018", "1", "Karthik Raja", "9952646025", "A1+", "41/43, Balaji Garden, Press Colony, Cbe-19"],
            ["4", "NALAN S S", "09-02-2018", "1", "Suresh", "8807472434", "B+", "1/20, Vallalar Nagar,Press Colony, Cbe-19"],
            ["5", "SARIN B", "02-09-2018", "1", "Balamurugan", "9944402990", "B+", "45/54, Sri Ram Nagar, Palaimalai Road, Periyanaikenpalayam,Cbe-20"],
            ["6", "VARUN SELVAN M", "6.9.2018", "1", "Mariselvam", "9942790044", "B+", "8/232-1, Kumaran Illam, Semozhali Nagar, Samanayakan Palayam-19"],
            ["7", "ASVIKA L K", "01-11-2018", "1", "Loganathan", "9751637156", "O+", "2/1235 Ganapathy Nagar,Bettathapuram, Karamadai, Cbe-19"],
            ["8", "DEEKSHIKA A", "11.01.2018", "1", "Arun Kumar", "9786077637", "A+", "188,Balaji Garden, Press Colony, Cbe-19"],
            ["9", "HARSHITA R", "13.07.2018", "1", "Ramesh Kumar", "9159724770", "O+", "E8, Indra Nagar, Nsn Palayam, Cbe"],
            ["10", "ITHALYA S A", "09-02-2019", "1", "Anbuselvan", "9843235555", "O+", "5/277, Near Bus Stop , Kalipalayam,Vellamadai(Po),Cbe"],
            ["11", "DHARSHITH A", "12-11-12018", "1", "Abhilash N", "9171451219", "B+", "103A Psr Nagar, Jadal Naidu street, Periyanaicken palayam, coimbatore 641020"],
            ["12", "ESHAANTH VETRIVELAN", "16-03-2018", "1", "Esakki Raja", "7449132604", "B+", "MK Nagar, NSN Palayam,Cbe-31"],
            ["13", "LAKSHANYA R", "16-01-2019", "1", "Rajkumar", "9994698818", "O+", "1, Marutham Garden, Samychettipalayam North, Jothipuram(Po),Cbe"],
            ["14", "RUDHRA A", "11.10.2018", "1", "Anandaraj B", "9952851844", "O+", "5/342, Angalamman St, Naickanpalayam, Cbe-20"],
            ["15", "SANGAMITHRA A", "3.8.2018", "1", "Anandababu", "9345832826", "A+", "41/1, Vanamariamman Kovil Strrt, Jothipuram (Po), Cbe"],
            ["16", "THIYA SHREE B", "29.01 2019", "1", "Balaji", "6380442936", "O+", "1/1158, Jj Nagar, Peruyamathampalayam,Cbe-19"],
            ["17", "VEDA SAMVIDHA B", "07-08-2018", "1", "Babu", "7708624404", "AB+", "47/15a, R.V Nagar, Pudhupudhur Road, Periyanaiken Palayam,Cbe"],
            ["18", "BHARANI SREE D", "25-11-2018", "1", "Dhilip S", "9943398909", "B+", "5/482, Avvai nagar, Naicken palayam, SRKV Post, PN Palayam,Cbe"],
            ["19", "HIMALI S", "27-11-2018", "1", "Chithra N", "9344750430", "B+", "10/A, Shree Bharathi nagar, Gudalur kavundampalayam, cbe-20"],
            ["20", "LANISHKA", "07.07.2018", "1", "Deenadayalan", "9344195531", "B+", "5/1,Indira Nagar Santhimedu,Press Colony Post,Coimbatore – 641019"],
            ["21", "ISHAANTH R", "10.06.2017", "III", "Raguraman", "9042210577", "B+", "57, Tank Street, Nsn Palayam, Cbe"],
            ["22", "MAINDHAN M", "10.06.2016", "III", "Manjula", "8098595421", "B+", "2/161, Padmalaya Nagar, Nsn Palayam,Cbe-20"],
            ["23", "NISHANTH H", "30.11.2016", "III", "Haridass", "9524211306", "O+", "34/4, Selvapuram North, Near Bible College, Cbe"],
            ["24", "NITHIN S", "15.07.2016", "III", "Saravanan S", "8973498001", "O+", "20/37, Appanagar, Mettupalayam"],
            ["25", "PAVITHRAN S", "10.07.2016", "III", "Srinivasan", "9894725444", "A+", "35/3 Vishnu Nagar, Naikanoor, No-4 Veerapndi, Cbe-19"],
            ["26", "PRAJIV C S", "27.05.2016", "III", "Chandrasekar S", "9790025552", "", "40, Mountain View, Maniyakaran Palayam, Idikarai,Cbe-22"],
            ["27", "RABI R", "01.12.2016", "III", "Rajesh Kumar C", "9894451782", "O+", "5/49, Seeliyur(Po), Karamadau-641113"],
            ["28", "AADHIRA M", "17.04.2017", "III", "Maheshwari", "9566528501", "O+", "22/A, Mariyamman Kovil Street"],
            ["29", "ALLISH GABRILLA L", "12.08.2016", "III", "Leo Mariadas", "8973506360", "O+", "96/24d, Thiru Vee.Ka.Nagar, Jothipram Post, Cbe-47"],
            ["30", "ANGELINA D", "25.05.2017", "III", "David Raj", "9597974282", "O+", "101/46e, Saraswathy Nagar, Tn Palayam ,Cbe"],
            ["31", "HEYRUTHRA S", "28.12.2015", "III", "Senthil Kumar S", "9944787714", "O +", "No 15, Muthu Nagar, Nsn Palayam,Cbe-31"],
            ["32", "KABILA SHREE B", "05.12.2016", "III", "Bala Chandar", "7402021793", "O+", "No.42, Kamaraj Nagar, Samichettipalayam"],
            ["33", "MONISHA K", "05.08.2016", "III", "Kalisamy", "9976633865", "O+", "Pothigai Garden, Samanayakan Palayam, Cbe"],
            ["34", "MOUKTHIKA M", "10.03.2017", "III", "Marisami", "8675641781", "O+", "48/1 Senguttai Thottam,Selvapurm,Veerapandi Pirivu."],
            ["35", "NANDHAKSHANA G", "10.04.2017", "III", "Gowrishanker", "8682008534", "A+", "3/1, R.P Nagar, Naicknoor, Cbe-19"],
            ["36", "NILA N", "27.10.2017", "III", "Nandhakumar", "9688406361", "AB+", "Sri Bharathi Nagar, G.Goundampalayam, Cbr"],
            ["37", "SATHYA S", "03.01.2017", "III", "Senthil Kumar S", "8148810724", "A+", "19 C G Residency, Sowdambigai Nagar , Samichettipalayam"],
            ["38", "MONIKA S", "16.01.2017", "III", "SURESH K", "9597213189", "", "2/200 Bilichi-Kavundanur, Bujaganur, Karamadai-13"],
            ["39", "ARRICK LEROY P", "16.03.2017", "III", "Praveen J", "9894052802", "AB+", "68/1C Nehru nagar, Samichettipalayam, Cbe -47"],
            ["40", "DUWARAK K", "01.08.2017", "III", "Kanagaraj.K", "9092943338", "O +", "2/367 Kumarapuram, Narasimanaiken palyam"],
            ["41", "HARIKRISH DEV  R", "12-01-2017", "III", "Rajasekaran C", "9843467715", "O+", "No.11 Bagya Avenue, R R Nagar, Pudhupalayam road, NSN Palayam,Cbe- 31"],
            ["42", "HARSHITH P", "04.04.2017", "II", "Pranesh Kumar", "8524999029", "B+", "94, Balaji Garden, Press Colony(Po),Cbe-19"],
            ["43", "MADIRAKSH A", "07.04.2017", "II", "Anandhakumar", "9688647780", "A+", "5/27 Kalipalayam, Vellamadai(Po),Cbe-10"],
            ["44", "PAVIN C", "15.5.2017", "II", "Chandrasekaran", "8489218498", "", "2/291,Thanneer Panthal, Bettathapuram,Karamadai"],
            ["45", "PUZHAL VANAN L", "17.01.2018", "II", "Lakshmi Kumar", "9524244030", "B+", "99/1 Thiruveeka Narar, 2nd Street, Jothipuram, Cbe-47"],
            ["46", "SAI DAKSHITH G", "25.07.2017", "II", "Ganesh", "8778810187", "B+", "36, Manigaran Palam, Mountain View, Idigarai,Cbe-31"],
            ["47", "VISHNU DEV R", "24.02.2018", "II", "Ramesh", "9843429047", "B+", "38 B2, Rkv Street, Veerapandi Pirivu, Cbe"],
            ["48", "HEENA SULTANA A", "20.05.2018", "II", "Abulthakeer", "9786818185", "A+", "400-1-5, Psc Garden, Mathampalayam,Cbe-19"],
            ["49", "NIKITHA J", "22.10.2017", "II", "Jayaraj", "9751030730", "", "4/389 Chinna Mathampalayam, Bilichi(Po),Cbe-19"],
            ["50", "THANISHKA V", "26.08.2017", "II", "Vijaya Kumar", "9943961665", "O+", "1/B/17, Thendral Nagar 1st Street, Nsn Palayam ,Cbe-31"],
            ["51", "YATHAVI J S", "13.01.2018", "II", "Jayakanth", "8807905813", "A+", "2/107, Poonga Nagar, No-4 Veerapandi,Cbe-19"],
            ["52", "AGNES ANGEL", "08-01-2017", "II", "Louis A", "9865999063", "O+", "No.40, Balaji garden, Press colony, Veerapandi pirivu, Cbe-18"],
            ["53", "THIRU THAMIL KUZHALI V", "14-10-2017", "II", "Vinoth kumar R", "6384052700", "AB+", "6/7, 58E, Vishnunagar,Naickanoor,N0.4.Veerapandi, Cbe-19"],
            ["54", "ABHINAV G", "09-06-2014", "V", "Ganesh Moorthy", "8072258302", "O+", "352/A, Selvapuram North, Vanamariyamman kovil st, jothipuram post, cbe"],
            ["55", "DHEEKSHID SAI M", "16.04.2015", "V", "Marisamy K", "8675641781", "O+", "48/1, Senguttai Thottam, Selvapuram."],
            ["56", "KRISHITH P", "10.08.2014", "V", "Pranesh Kumar", "8524999029", "B+", "94, Balaji Garden, Press Colony, Cbe"],
            ["57", "SAHISHNU A", "28.03.2015", "V", "Arumugam", "9894701813", "A+", "7/213 Samanaicken Palayam, No.4 Veerapandi (Po),Cbe-19"],
            ["58", "DEV P", "04.08.2014", "V", "Prabhu", "9943442853", "a+", "M13, Thendral Nagar 2nd Street, Nsn Palayam,Cbe-31"],
            ["59", "LATHEESH  Y T", "09.10.2014", "V", "Thiyagarajan N", "7598125079", "B-", "No 291, 6th Street,Sri Balaji Garden, Presscolony-47"],
            ["60", "GOPIKA R", "15.10.2013", "VI", "Chandra Sekran", "9159370276", "A+", "2/291,Thanneer Panthal, Bettathapuram,Karamadai"],
            ["61", "SAATHVIK A", "14.11.2013", "VI", "Arun Kumar S", "9786077637", "A1+", "188, Balaji Garden, Press Colony, Cbe-19"],
            ["62", "GOTTAM SARVAREESH R", "10.09.2013", "VI", "Ramesh", "7032263067", "O+", "No.1 , 3rd Street , Lakshmi Nagar, P.N.Palayam"],
            ["63", "DHIYA SRI S", "12-07-2013", "VI", "Senthil kumar", "7010291926", "B-", "31A, RVK st, Veerapandi pirivu, Cbe-20"]
        ]
    },
    {
        title: "ID CARD SECTION SHEET",
        columns: [
            "S.No", "NAME", "DOB", "CLASS",
            "FATHER NAME", "PH.NO", "B.G", "ADDRESS"
        ],
        rows: [
            ["64", "ARISHMAN R", "10.05.2013", "VII", "Raguraman", "9488515542", "O+", "57, Tank Street,Nsn Palayam,Cbe"],
            ["65", "SANJIV C S", "29.04.2013", "VII", "Chandra Sekar", "9790025552", "", "40, Mountain View, Maniyakaran Palayam, Idikarai,Cbe-22"],
            ["66", "SOWSHIN S", "22.04.2012", "VII", "Saravanan", "8973498001", "O+", "20/37, Appanagar, Mettupalayam"],
            ["67", "DHIVYA DHARSHAN D", "23-03-2013", "VII", "Devaraj N", "9080579925", "", "3/142, Kanuvai palayam, marudhur, Gopanari-641113"],
            ["68", "AGALYA J M", "11-05-2013", "VII", "Jeevananthan.S", "9787052032", "B+", "14H Shanti Medu ,Vellalar Nagar Exited ,Coimbatore 641019"],
            ["69", "SUSHMITHA E", "09.09.2011", "VIII", "Eswaran", "9940068363", "O+", "7/4, East Street, Kavundampalayam."],
            ["70", "PRAJITH V", "09.05.2012", "VIII", "Velumani", "9159392583", "AB+", "1/14e Shanthimedu, Vallalar Nagar, Press Colony(Po),Cbe-19"],
            ["71", "SAI RAKESH G", "06.04.2012", "VIII", "Prasath M", "9942466986", "B+", "10/1, Imdira Nagar, Naickanoor,No-4, Veerapandi,Cbe-19"],
            ["72", "YADHUNANDAN N", "02.07.2012", "VIII", "Nandhakumar B", "9003457788", "O+", "No-50, Mahalakshmi Garden,Press Colony Backside, Jothipuram,Cbe"],
            ["73", "LAKSHITA A", "16.09.2011", "VIII", "Arun Kumar D", "9944588659", "O+", "S.No.406/1, Psc Garden, Mathampalayam"],
            ["74", "INFANT D A", "27.04.2015", "IV", "DINESH KUMAR", "8344362767", "O+", "5/13, SEELIYUR (PO),KARAMADAI"],
            ["75", "PRANAAV PRIYAN S", "27.02.2015", "IV", "SIVA SANKARAN", "8778944302", "O+", "A1 BLOCK, KSN ILLAM SEMMOZHI NAGAR, SAMANAICKEN PALAYAM."],
            ["76", "SAI SANJEEV D", "11.06.2015", "IV", "DINAKARAN", "9944588659", "O+", "S.NO:46, PS GARDEN, MATHAMPALAYAM-19"],
            ["77", "CHARUMATHI S", "20.12.2015", "IV", "SELVARAJU", "9566727588", "O+", "1/394 SOUNDHARRAJ NAGAR, PERUYA MATHAMPALAYAM, BILICHI-19"],
            ["78", "DHEERA D", "03.02.2016", "IV", "DILIP K", "9994498957", "O+", "SHREE VARI GARDEN, SHANTHIMEDU, PRESS COLONY(PO), CBE-19"],
            ["79", "INIYAVAL A", "17.01.2016", "IV", "ANBUSELVAN", "9843235555", "O+", "5/277, KALIPALAYAM VELLAMADAI(PO),CBE-10"],
            ["80", "MOSHIKA R.V", "23.06.2015", "IV", "RANJITH KUMAR", "8883159703", "O-", "74 MOUNTAIN VIEW, MANIYAKARAN PALAYAM, IDIKARAI"],
            ["81", "PAVISH S", "05-02-2016", "IV", "Shankar P", "8110815709", "", "No 55, Teachers colony, NSN Palayam, Cbe-31"],
            ["82", "VISHRUTH A", "25-02-2015", "IV", "Abhilash N", "9843501113", "", "103A Psr Nagar, Jadal Naidu street, Periyanaicken palayam, coimbatore 641020"],
            ["83", "HARSHA PRADA G D", "05-10-2015", "IV", "Ganesan J", "8015609481", "", "18 NPT-A, Sri ram nagar, Kathirnaicken palayam, Cbe-17"],
            ["84", "HEMITHRA G S", "07.06.2019", "UKG", "Gnana Prakasam", "9894291646", "B+", "2, Sri Ganapathy Nagar, Chinna Kannaa Puthoor, Samichettypalayam, Cbe-47"],
            ["85", "JANVIKA SRI J", "10.09.2019", "UKG", "Jegan R", "8220740470", "A+", "43,Tank Street, Nsn Palayam,Cbe-31"],
            ["86", "PREETHIKA SRI M", "07.12.2019", "UKG", "Marichamy", "9543807523", "O+", "125/14c Kamaraj Nagar, Samichettiplayam, Jothipuram (Po), Cbe-47"],
            ["87", "SHIVANYA P", "13.09.2019", "UKG", "Praveen B", "7904218989", "O+", "15 Srinivasan Nagar, Press Colony"],
            ["88", "THANISHKA  S", "29.11.2019", "UKG", "Sathish Kumar", "8668198398", "AB+", "188/324d, Kanga Illam Verapandi Pirivu, Press Colony (Po), Cbe-19"],
            ["89", "TANU SHRIJA M", "07-02-2019", "UKG", "S.Mariyappan", "9087990073", "O+", "Maniyakaranpalayam,Mahalakshmi Garden Idigarai 641022"],
            ["90", "VENBA B C", "10-07-2019", "UKG", "Balachandar S", "9894592321", "A+", "No.42, Kamaraj Nagar, Samichettipalayam"],
            ["91", "ARIK JOSE D", "22.04.2019", "UKG", "David Raj", "9597974282", "O+", "101/46e, Saraswathi Nagar, T.N.Palayam, Jothipuram(Po),Cbe"],
            ["92", "KAVIN CHAKRAVARTHY R", "04.11.2019", "UKG", "Rajkumar", "9600002201", "B+", "No 29, Sri Anna Poorani Nagar, T.N Palayam, Jothipuram(Po),Cbe"],
            ["93", "SASWANTH P.K", "16.02.2019", "UKG", "Praveen Kumar", "9789135045", "B+", "5/89, Seeliyur, Seeliyur(Po), Karamadai"],
            ["94", "DAKSHITHA C", "22-01-2019", "UKG", "Rasika", "9677937642", "AB+", "5/302 Angalamman Steet Naicken Palalyam"],
            ["95", "ANIESH RAJ G", "12-03-2019", "UKG", "Govindaraj R", "6380117249", "O+", "NO. 6/5, Vanamariamman Kovil street, Selvapuram, Cbe-47"],
            ["96", "KAMALESH J", "20-06-2019", "UKG", "Jeevananthan.S", "9787052032", "B+", "14H Shanti Medu ,Vellalar Nagar Exited ,Coimbatore 641019"],
            ["97", "MOGITH M", "03-08-2019", "UKG", "Manikkam M", "9043744109", "", "Sri Bharathi nagar, G.Kavundampalayam, Cbe-20"],
            ["98", "ROMAN REGIS L", "21-04-2019", "UKG", "A. Louis", "9865999063", "O+", "D.No: 40,Balaji Gardens, Press Colony, Veerapandi Pirivu, Cbe - 18"],
            ["99", "SASHWANTH V", "16-09-2019", "UKG", "Vishnu varthan N", "7639185296", "O+", "No.2/240, Dhakshitha Illam,Annamalai nagar, G.Kavundampalayam, Cbe-20"],
            ["100", "YASWAND P", "08-12-2018", "UKG", "Prabhagaran D", "9025105944", "", "Sri bharathi nagar, G.Kavundampalayam,Cbe-20"],
            ["101", "VIHAANTH G K", "15-08-2019", "UKG", "Kumar A", "9003632443", "A+", "322, 7th Street ,Sri Balaji garden, Press colony (po),Cbe-19"],
            ["102", "SARVINI A", "06.02.2020", "LKG", "Ashok M", "9790303309", "B+", "13, Jv Nagar, Kamachi Puram, G Gowndapalayam, Cbe"],
            ["103", "KIRESIKA D", "09-01-2020", "LKG", "Dharamendaran D", "9524337645", "B+", "2/245, Balan nagar, karamadai, cbe-641104"],
            ["104", "NIRALYA N", "21-12-2020", "LKG", "Nandha kumar G", "8012622131", "AB+", "6,Sri Barathi nagar,G.Goundampalayam,Cbe-20"],
            ["105", "PAVIKSHA B M", "06-04-2020", "LKG", "Balaji K", "9566317184", "B+", "1/4F-2 Hamsaveni dis, Vallalaar nagar, Shanthi medu,Press colony,Cbe-19."],
            ["106", "SIYA PRADHY M", "11-09-2020", "LKG", "Mahalingam", "9655803744", "O+", "40/5, Vignesh Avenue, No.4 Veerapandi , Cbe-19"],
            ["107", "VINISHA C", "23-05-2020", "LKG", "Rasika", "9677937642", "AB+", "5/302, Angalamman st, Naicken palayam, cbe"],
            ["108", "DAKSHITH V", "18-05-2020", "LKG", "S.Viknes", "8667576203", "", "21 Sri Vari Garden,Press Colony,Veerapandi Pirivu 641019, Coimbatore."],
            ["109", "DEEKSHITH S", "19-04-2020", "LKG", "Selvakumar C", "8270779571", "B+", "174, Veerapandi pirivu, Jothipuram, Cbe-47"],
            ["110", "HASWANTH S T", "29-04-2020", "LKG", "Sriganth", "9943866886", "B+", "57 A, Amsi nagar,Selvapuram(road), Jothipuram(post), Cbe-47"],
            ["111", "KRISHVANTH KUMAR K", "20-03-2020", "LKG", "Karthik S", "9843853837", "A+", "126, Sri Bharathi nagar, G.Kavundampalayam, Cb-20"],
            ["112", "LASHWIN M J", "06-10-2020", "LKG", "Manoj kumar P", "8220568739", "O+", "10, Innisai Nagar, Chinnamathampalayam, Bilichi, Cbe-19"],
            ["113", "LEE M", "07-11-2020", "LKG", "Muthusamy C", "9655753136", "O+", "5/6 Vanamariamman kovil street, Selvapuram, Jothipuram post, Cbe-47"],
            ["114", "MOHAMMED AATHIF M", "22-02-2020", "LKG", "Mohammed Ali", "9611186601", "A+", "1/1120 Periyamathampalayam, Bilichi, Cbe-19"],
            ["115", "REKAB ISRAEL R", "20-11-2020", "LKG", "Rajesh kumar", "9894451782", "O+", "5/49, Seeliyur (po), Karamadai (via), Mettupalayam (taluka), Coimbatore - 641113."],
            ["116", "SRI SARAN D", "14-09-2020", "LKG", "Dinakaran P", "9944588659", "A1 B+", "S.No 406/1, PSC Garden, Mathampalayam, Cbe"],
            ["117", "VARUN KRISH", "09-09-2020", "LKG", "Haridass E", "9524211306", "O+", "No.34/4, Selvapuram north, Near bible college, Cbe-47"],
            ["118", "SHIVANI R", "12.07.2020", "LKG", "Rajaguru", "9360959676", "O+", "4/7, Postal Colony, Kashturi Palayam, Cbe"],
            ["119", "SASHVIDHA", "25-02-2020", "LKG", "Babu B", "7708624404", "AB+", "47/15, R .V.Nagar, 9th street, PN Playam, Cbe-20"],
            ["120", "DARIKA A", "21-04-2021", "Pre KG", "Anand kumar N", "9003599854", "A+", "64B Annanagar, samichettypalayam, Cbe-47"],
            ["121", "HARIJITH J", "07-08-2021", "Pre KG", "Janagan", "8940039224", "", "140,R.V.Street, Veerapandi pirivu,Cbe-47"],
            ["122", "HEMANTH P", "01-01-2021", "Pre KG", "Prabhakaran D", "9025105944", "", "Sri barathi nagar, G.Gowndampalayam,Cbe-20"],
            ["123", "KERTHISH A", "21-03-2021", "Pre KG", "Arun kumar P", "9344386774", "", "972/34, Sri bharathi nagar, PN Palayam, Cbe-20"],
            ["124", "KIRTHISH KUMAR D", "01-12-2020", "Pre KG", "Dinesh kumar N", "9894190262", "O+", "80,Vattaparai pudur, Jothipuram,Cbe-47"],
            ["125", "NIKIL  K M", "05-01-2021", "Pre KG", "Kani K", "9894772109", "", "143/6,Bharathi nagar, PN Palayam, Cbe-20"]
        ]
    },
    {
        title: "STUDENT ID CARD",
        columns: [
            "S.No", "NAME", "DOB", "CLASS",
            "FATHER NAME", "PH.NO", "B.G", "ADDRESS"
        ],
        rows: [
            ["126", "ALWIN R", "07.06.2018", "1", "Robert Rechard A", "6383868115", "B+", "386, Balaji Garden, Press Colony, Cbe-20"],
            ["127", "DHARSHITH P S", "22.04.2017", "1", "Preshnave", "9080107559", "B+", "K.R Colony, Karamadai, Cbe."],
            ["128", "VARSHA SRI B", "18-01-2019", "1", "Balaji", "7708855326", "A+", "10b-1, Vallalar Nagar, Santhimedu, Cbe-19"],
            ["129", "RHEMA ZOE DANIEL D", "31.01.2017", "III", "Daniel Rajan", "9677203803", "A+", "1/2, Amsi Nagar, Jothipuram(Po), Selvapuram(Via), Cbe-47"],
            ["130", "SHANVI S", "12.08.2017", "III", "Suresh Babu", "9843855481", "B+", "15a/2, Vallalar Nagar, Shanthimedu, Cbe-19"],
            ["131", "NAKSHATRA G", "25.07.2017", "III", "Gunasekaran.S", "7448580556", "O+", "16/48 Asokathottam, Press Colony post, CBE -19"],
            ["132", "SUPREETH M", "24.06.2016", "III", "Murugan N", "8870615571", "O +", "48, Asoka thotham, Press Colony post, Cbe -19"],
            ["133", "VIDYUT PRITHVI", "16-05-2017", "II", "Janagan", "8940039224", "", "140, R.V.Street, Veerapandi pirivu, Cbe-47"],
            ["134", "LIKISHA", "04-11-2017", "II", "Murugan N", "8870615571", "", "48, Asoka thotham, Press Colony post, Cbe -19"],
            ["135", "NAVIS G", "09-06-2017", "II", "Gokula vishnu C P", "9600684269", "B+", "24 Sri ranga nagar, Pudhur road, PN Palayam, Cbe-641020"],
            ["136", "NITHIN A", "30.08.2017", "II", "Arumugam", "9894701813", "", "7/213 Samanaicken Palayam, No.4 Veerapandi (Po),Cbe-19"],
            ["137", "NIZHISHA P S", "09.10.2013", "VI", "Preshnave", "9080107559", "B+", "46/1 Kr Colony , Karamadai"],
            ["138", "HASITHA A", "09.06.2016", "IV", "ASHOK KUMAR", "9940755711", "B+", "39 VATTAPARAI PUDUR, TN PALAM, SELVAPURAM ROAD, JOTHIPURAM(PO),CBE-47"],
            ["139", "YASWANTH A", "25-04-2016", "IV", "Anandaraj", "6383613921", "O+", "5/342, Angalamman St, Naickanpalayam, Cbe-20"]
        ]
    },
];

const TabTable = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="tabs-container">
            <Tabs selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
                <TabList>
                    {tabData.map((tab, index) => (
                        <Tab key={index}>{tab.title}</Tab>
                    ))}
                </TabList>

                {tabData.map((tab, index) => (
                    <TabPanel key={index}>
                        <div className="table-container">
                            {tab.tables ? (
                                tab.tables.map((table, tIndex) => (
                                    <div key={tIndex}>
                                        <h3 className="table-title">{table.title}</h3>
                                        <table>
                                            <thead>
                                                <tr>
                                                    {table.columns.map((col, i) => (
                                                        <th key={i}>{col}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {table.rows.map((row, i) => (
                                                    <tr key={i}>
                                                        {row.map((cell, j) => (
                                                            <td key={j}>{cell}</td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                            {table.footer && (
                                                <tfoot>
                                                    <tr>
                                                        {table.footer.map((cell, i) => (
                                                            <td key={i} colSpan={i === 1 ? 2 : 1}>
                                                                {cell}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                </tfoot>
                                            )}
                                        </table>
                                    </div>
                                ))
                            ) : (
                                <table>
                                    <thead>
                                        <tr>
                                            {tab.columns.map((col, i) => (
                                                <th key={i}>{col}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tab.rows.map((row, i) => (
                                            <tr key={i}>
                                                {row.map((cell, j) => (
                                                    <td key={j}>{cell}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default TabTable;