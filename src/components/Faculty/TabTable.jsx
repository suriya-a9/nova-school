import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./TabTable.css";

const tabData = [
    {
        title: "Teaching Staff Particulars",
        columns: [
            "S.No", "TEACHER NAME", "FATHER/HUSBAND NAME", "GENDER", "DOB", "QUALIFICATION",
            "DATE OF APPOINTMENT", "TEACHING EXPERIENCE", "TRAINED/UNTRAINED", "GROSS SALARY"
        ],
        rows: [
            [1, "Manoranjitham V", "Viswanathan", "Female", "01-07-1994", "M.A.,B.Ed.", "22-05-2024", "1 Year", "TRAINED", "15000/-"],
            [2, "Deepika C", "Chitrakumar", "Female", "11-06-1995", "B.A.,B.Ed.", "20-05-2024", "1 Year", "TRAINED", "15000/-"],
            [3, "Chitra M", "Moorthy", "Female", "14-04-1998", "B.A.,B.Ed.", "03-06-2019", "5 Year", "TRAINED", "17000/-"],
            [4, "Shobhana M", "Mani", "Female", "05-06-1996", "M.Sc., B.Ed.", "10-06-2019", "3 Year", "TRAINED", "16000/-"],
            [5, "Sanjana K", "Kumar", "Female", "28-03-1994", "M.Sc., B.Ed.", "20-05-2024", "3 Year", "TRAINED", "16000/-"],
            [6, "Gayatri K", "Kumar", "Female", "23-04-1995", "B.Tech.", "20-05-2024", "4 Year", "TRAINED", "16000/-"],
            [7, "Jayachitra N", "Nagendran", "Female", "08-03-1985", "B.Sc.,B.Ed.", "01-07-2024", "1 Year", "TRAINED", "15000/-"],
            [8, "Visalakshmi", "Suresh", "Female", "06-04-1994", "M.Sc., B.Ed.", "13-06-2022", "2 Year", "TRAINED", "15000/-"],
            [9, "Sandhiya", "Sanathaiyan", "Female", "14-07-1990", "B.A.,B.Ed.", "05-02-2024", "10 Year", "TRAINED", "17000/-"],
            [10, "Suja Susantan", "Leslieclement", "Female", "30-08-1970", "Hindi Praveen", "20-05-2024", "14 Year", "TRAINED", "17000/-"],
            [11, "Menaka", "Kumar", "Female", "20-05-1989", "B.A.,B.Ed.", "20-05-2024", "1 Year", "TRAINED", "15000/-"],
            [12, "Reshma", "Moorthy", "Female", "26-07-1996", "M.A.,B.Ed.", "06-06-2018", "6 Year", "TRAINED", "20000/-"],
            [13, "Ashlinnithya", "Mageshwaran", "Female", "04-04-1998", "M.A.,M.Ed.", "10-06-2024", "1 Year", "TRAINED", "15000/-"],
            [14, "Radha", "Durairaj", "Female", "27-05-1983", "M.A.,B.Ed.", "12-06-2024", "15 Year", "TRAINED", "20000/-"],
            [15, "Dhilip", "Selvan", "Male", "16-01-1991", "MCA", "12-06-2024", "1 Year", "TRAINED", "15000/-"]
        ],
    },
    {
        title: "Non Teaching Staff Particulars",
        columns: ["S.No", "TEACHER NAME", "DUTY ASSIGNED"],
        rows: [
            [1, "Poongodi", "SWEEPER"],
            [2, "Alimuthir", "SECURITY"],
            [3, "Thilagavathy", "OFFICE ASSISTANT"],
            [4, "Vijaya", "SWEEPER"],
            [5, "Vasanth", "DRIVER"],
            [6, "Kirubha", "DRIVER"],
            [7, "Karthi", "DRIVER"]
        ],
    },
    {
        title: "List of Library Books",
        tables: [
            {
                title: "LIST OF LIBRARY BOOKS",
                columns: ["S.No", "Title", "No. of Books"],
                rows: [
                    [1, "REFERENCE BOOK", 125],
                    [2, "STORY BOOKS IN HINDI", 115],
                    [3, "DICTIONARY", 35],
                    [4, "ENCYCLOPEDIA", 44],
                    [5, "MATHEMATICS", 125],
                    [6, "ENGLISH LANGUAGE & LIT.", 130],
                    [7, "ENVIRONMENTAL STUDY", 120],
                    [8, "SCIENCE & TECH.", 225],
                    [9, "SOCIAL SCIENCE", 250],
                    [10, "SANSKRIT", 30],
                    [11, "COMPUTER SCIENCE", 250],
                    [12, "GENERAL BOOKS", 550],
                    [13, "NCERT BOOKS CLASS- 1 TO VIII", 450],
                    [14, "STORY BOOKS IN ENGLISH", 159],
                    [15, "LIFE OF NATIONAL HEROES", 39],
                    [16, "ATLAS", 12],
                    [17, "GANDHI SERIES", 26],
                    [18, "MALGUDI DAYS", 15],
                    [19, "ARABIAN NIGHTS", 12],
                    [20, "PENGUIN SERIES OF STORES", 46],
                    [21, "CHILDREN’S COMPANION SERIES", 48],
                    [22, "FORMULAE BOOKS SERIES", 26],
                    [23, "ESSAY BOOKS", 29],
                    [24, "WORD POWER BOOKS", 16],
                    [25, "SCIENCE WIZARD COLLECTION", 32],
                    [26, "LONGMAN SERIES OF CLASSIC BOOK", 34],
                ],
                footer: ["TOTAL", "", 2943],
            },
            {
                title: "NEWSPAPER",
                columns: ["S.No", "PARTICULARS", "Qty"],
                rows: [[1, "THE TIMES OF INDIA", "02 EVERYDAY"]],
            },
            {
                title: "MAGAZINES",
                columns: ["S.No", "PARTICULARS", "Qty"],
                rows: [
                    [1, "CURRENT AFFAIRS", "5 MONTHLY"],
                    [2, "KIDS KINGDOM", "6 MONTHLY"],
                    [3, "GK TODAY", "10 MONTHLY"],
                    [4, "INDIA TODAY", "5 MONTHLY"],
                    [5, "SCIENCE REFRESHERS", "6 MONTHLY"],
                ],
            },
        ],
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