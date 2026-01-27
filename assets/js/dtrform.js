        function printGoogleSheet() {
            const sheetId = "1knX6Qjjwaj5hYSY89MFIoAxmX8-6Rkx2IxhWwUqFqmU";
            const printURL = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=pdf`;

            alert("The FORM will be saved. Kindly ensure to full copy the contents of the form into the salary spreadsheet. Then rename or open and print the pdf file.");
            const printWindow = window.open(printURL, '_blank');
           
            printWindow.onload = () => {
                printWindow.focus();
                printWindow.print();
            };
        }