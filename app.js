function print(quality = 1) {
    const filename  = 'yourResume.pdf';
    const fname  = 'jehad';
    const lname  = 'mohamed';
    const phno = '+91 97312 92790'
    const email = 'jehadmohamedz@gmail.com'
    const linkedin  = 'www.linkedin.com/in/jehad-ddx'
    const tagline = 'dreamer  /  designer  /  engineer'
    var lot = tagline.length
    var skills = ["Graphic Design","Web Development","Computer Vision","Augmented Reality"]
    var infox =120
    var infoy =15
    var edux = 70
    var achvx = edux + 35
    var porx = achvx + 55
    var edu = {name:'Sahyadri College of Engineering',date:'2016-2020',crs:'BE in Computer Science'}
    var achv = ['Special Mention Award','1st Place','1st Place']
    var achv_o = ['Kshitij - IIT KGP','TechVsion','Automata - NITK']
    var por =['Co Founder and Head of Design','Vice Chairperson','Dean']
    var por_o =['Dream.Design.Experience.','SOSC','School of AI']
    var skills =['Computer Vision', 'Graphic Design','AR/VR/MR','Web Development']
    var intern=['Campus Ambassador','Innovation and Design Intern','Computer Vision and Robotics Intern']
    var int_date=['2016-2017','2017-2018','2018-Present']
    var comp = ['Twenty19','DTlabz','Sickle Innovations']
    var intern_o={'Twenty19':['Marketed the company\'s services','Organized Seminars to help with internships','Digital Marketing through Social Media'],'DTlabz':['Managed Several Design & Technical Projects','Mentored juniors on Computer Vision','Handled design creation for events'],'Sickle Innovations':['Created Robot Design for a client Project','Worked on the Computer Vision code for the robot']}
    var skillx = porx +55
    var prog  = ["Python",'Java','HTML/CSS/JS','C#']
        let doc = new jsPDF('p', 'mm', 'a4');

        doc.setDrawColor(255,240,0);
        doc.setFillColor(255,240,0);
        doc.rect(0, 0, 1000, 56,'F');
        doc.rect(0, 280, 1000, 56,'F');

        doc.setDrawColor(0,0,0);
        doc.setFillColor(0,0,0);
        doc.rect(19, 39, lot*2.3, 10,'F');

        doc.setDrawColor(15,15,15);
        doc.setFillColor(15,15,15);
        doc.rect(0, 56, 800, 224,'F');


        doc.setFont("arial", "bold");
        doc.setFontSize(45);

        // doc.setTextColor(255, 255, 255);
        // doc.text(21, 21, 'jehad');
        // doc.setFont("arial", "normal");
        // doc.text(21, 33, 'mohamed');

        doc.setTextColor(0, 0, 0);
        doc.setFont("arial", "bold");
        doc.text(20, 22, fname);
        doc.setFont("arial", "normal");
        doc.text(20, 34, lname);
        doc.setFontSize(14);
        doc.text(infox, infoy, phno);
        doc.text(infox, infoy+6, email);
        doc.text(infox, infoy+12, linkedin);
        doc.setFontSize(13);
        doc.setTextColor(255, 240, 0);
        doc.setFont("arial", "bold");
        doc.text(22, 45, tagline);

        doc.setFontSize(15);
        doc.setTextColor(255, 240, 0);
        doc.text(19, edux, 'education');

        doc.setFontSize(12);
        doc.setTextColor(255, 255, 255);
        doc.text(19, edux+8, edu.name);
        doc.setFont("arial", "normal");
        doc.text(19, edux+14, edu.crs);
        doc.text(19, edux+20, edu.date);

        
        doc.setFontSize(15);
        doc.setTextColor(255, 240, 0);
        doc.setFont("arial", "bold");
        doc.text(19, achvx, 'achievements');
        doc.setFontSize(12);
        doc.setTextColor(255, 255, 255);
        var l = achvx+2;
        for(i=0;i<achv.length;i++){
            doc.setFontSize(12);
            doc.setFont("arial", "bold");
            doc.text(19, l+6, achv[i]);
            doc.setFont("arial", "normal");
            doc.setFontSize(10);
            doc.text(19, l+12, achv_o[i]);
            l=l+13;
        }

        doc.setFontSize(15);
        doc.setTextColor(255, 240, 0);
        doc.setFont("arial", "bold");
        doc.text(19, porx, 'positions of responsibilities');
        doc.setFontSize(12);
        doc.setTextColor(255, 255, 255);
        var l = porx+2;
        for(i=0;i<por.length;i++){
            doc.setFontSize(12);
            doc.setFont("arial", "bold");
            doc.text(19, l+6, por[i]);
            doc.setFont("arial", "normal");
            doc.setFontSize(10);
            doc.text(19, l+12, por_o[i]);
            l=l+13;
        }


        doc.setFontSize(15);
        doc.setTextColor(255, 240, 0);
        doc.setFont("arial", "bold");
        doc.text(19, skillx, 'skills');
        doc.setFontSize(12);
        doc.setTextColor(255, 255, 255);
        var l = skillx+2;
        for(i=0;i<skills.length;i++){
            doc.setFont("arial", "bold");
            doc.text(19, l+6, skills[i]);
            l=l+6;
        }

        doc.setFontSize(15);
        doc.setTextColor(255, 240, 0);
        doc.setFont("arial", "bold");
        doc.text(110, edux, 'experience');

        doc.setFontSize(12);
        doc.setTextColor(255, 255, 255);
        var l = edux+2;
        for(i=0;i<int_date.length;i++){
            doc.setFontSize(12);
            doc.setFont("arial", "bold");
            doc.text(110, l+6, intern[i]);
            doc.setFontSize(11);
            doc.text(110, l+12, comp[i]);
            doc.setFont("arial", "normal");
            doc.setFontSize(10);
            doc.text(165, l+12, int_date[i]);
            l=l+15;
            var list  = intern_o[comp[i]]
            for(j=0;j<list.length;j++){
                doc.text(110, l+6, list[j]);
                l=l+6;
            }
            l=l+8;
        }

        doc.setFontSize(15);
        doc.setTextColor(255, 240, 0);
        doc.setFont("arial", "bold");
        doc.text(110, skillx, 'programming languages');
        doc.setFontSize(12);
        doc.setTextColor(255, 255, 255);
        var l = skillx+2;
        for(i=0;i<prog.length;i++){
            doc.setFont("arial", "bold");
            doc.text(110, l+6, prog[i]);
            l=l+6;
        }


        //pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 10, 10,canvas.width/8,canvas.height/8);
        doc.save(filename);

}