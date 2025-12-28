function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.style.backgroundColor = "green";
        alert("Correct Answer! ✅");
    } else {
        button.style.backgroundColor = "red";
        alert("Wrong Answer ❌ Try again!");
    }
}

window.addEventListener('DOMContentLoaded', () => {
  const { jsPDF } = window.jspdf;

  const pageContents = [
    {
      title: 'Overview of Front-End Development and Its Impact on User Experience',
      body: `Front-end development focuses on creating the visual and interactive aspects of websites and web applications that users directly engage with. It involves translating design mockups into functional web pages using technologies like HTML, CSS, and JavaScript. A well-executed front-end enhances user experience by ensuring fast loading times, smooth interactions, responsive designs for various devices, and overall user satisfaction and engagement.

    \n\n 
    Impact on User Experience,
  (1) Improves website usability and accessibility\n
            (2) Ensures fast loading and smooth interactions\n
            (3) Creates responsive designs for all devices\n
            (4) Enhances user satisfaction and engagement\n
            (5) Good front-end development improves user satisfaction, engagement, and retention.`
    },

    {
      title: 'Common Technologies and Tools Used in Front-End Development',
      body: `Common technologies include HTML for structure, CSS for visual styling and layout (Flexbox & Grid), and JavaScript for client-side behavior . Frameworks and libraries such as React, Vue, and Angular help build large-scale component-based UIs. Tooling (bundlers, linters), testing frameworks, accessibility practices, and performance optimization are also essential.
      \n\n  
      Key Tools & Concepts,
            (1) Version Control: Git & GitHub for code management.\n
            (2) APIs (Application Programming Interfaces): Allow the front-end to communicate and exchange data with the back-end (server).\n
            (3) Responsive Design: Ensures websites look and work well on all screen sizes (desktops, tablets, phones).\n
            (4) Frameworks/Libraries: Tools like React, Angular, Vue help build complex UIs with reusable components\n
            (5) Code Editors: VS Code, Sublime Text for efficient coding.`
    },
    {
      title: 'Roles, Responsibilities & Q&A',
      body: `Typical responsibilities: (1)Convert UI/UX designs into functional web pages and Optimize website performance.
      (2)Develop responsive and interactive UI components.
      (3)Collaborate with designers and backend developers.
      (4)Ensure cross-browser compatibility.
      (5)Debug and maintain front-end code.
      \n\n
      Q&A: 
      (1) CSS is used for styling web pages. 
      (2)HTML is used to structure web content?. 
      (3) React is commonly used for component UIs.
      (4) JavaScript is used for interactivity.
      (5) React is a JavaScript Library.`
    }
  ];

  document.getElementById('downloadPdf').addEventListener('click', () => {
    const doc = new jsPDF({unit:'pt',format:'a4'});
    const margin = 40;
    const pageWidth = doc.internal.pageSize.getWidth() - margin*2;

    pageContents.forEach((p, i) => {
      doc.setFontSize(16);
      doc.setTextColor(40);
      doc.text(p.title, margin, 60);
      doc.setFontSize(12);

      const lines = doc.splitTextToSize(p.body, pageWidth);
      doc.text(lines, margin, 90);

      if(i < pageContents.length -1) doc.addPage();
    });

    doc.save('front-end-developer-guide.pdf');
  });

  document.getElementById('printPdf').addEventListener('click', () => {
    window.print();
    });
    });