import React from "react"
import jsPDF from 'jspdf'
import 'jspdf-autotable'

const useExportPDF = () => {
    const exportToPDF = (users) => {
        const doc = new jsPDF();
        doc.text("Users Data", 20, 10);
        const tabColumn = ["Name", "Username", "Email", "Address", "Phone", "Website", "Company"];
        const tabRow = users.map(user => [
            user.name,
            user.username,
            user.email,
            `${user.address.street}, ${user.address.city}`,
            user.phone,
            user.website,
            user.company.name
        ]);

        doc.autoTable({
            head: [tabColumn],
            body: tabRow,
        })

        doc.save("UserTable.pdf");

    }
    return { exportToPDF };
};

export default useExportPDF;
