let studentMarks=i
0<i<100
function studentGradeGenerator(i){
if (i>79){
    return 'A'
}
else if (60<=i<=79){
    return 'B'
}
else if (49<=i<60){
    return 'C'
}
else if (40<=i<59){
    return 'D'
    //returns the grade A
}
else if (i<40){
    return 'D'
    //returns the grade D
}
}
studentMarks(i)
//invokes the function


function speedDetetctor(speed){
    const speedLimit=70
    const demeritPointsPerOverSpeed=5
    const maxDemeritPoints=12

    if(speed<=speedLimit){
        console.log('OK')
    }
    else{
        const demeritPoints=Math.floor((speed - speedLimit) / demeritPointsPerOverSpeed)
    console.log(`Points :${demeritPoints}`)   
    //prints out the demeritPoints
    
    if (demeritPoints>maxDemeritPoints){
        console.log('License suspended') 
        //Prints out License suspended
    }
}
}
//You can give any number as a parameter in speedDetector()


const incomeTaxRate=0.1
const nhifDeduction=500
const nssfDeduction=0.06

function calculateGrossSalary(basicSalary,benefits){
    return basicSalary+benefits
}
function calculatePayeTax(grossSalary){
    const threshold=24000
    const taxableIncome=Math.max(grossSalary-threshold,0)
    return taxableIncome*incomeTaxRate
}
function calculateNhifDeductions(grossSalary){
    if(grossSalary<=5999){
        return 150
    }
    else if(grossSalary<=7999){
        return 300
    }
    else if(grossSalary<=11999){
        return 400
    }
else if(grossSalary<=14999){
    return 500}
    else if(grossSalary<=19999){
        return 600
    }
    else if(grossSalary<=24999){
        return 750
    }
    else if(grossSalary<=29999){
        return 850
    }
    else if(grossSalary<=34999){
        return 900
    }
    else if(grossSalary<=39999){
        return 950
    }
    else if(grossSalary<=44999){
        return 1000
    }
    else if (grossSalary<=49999){
        return 1100
    }
    else if (grossSalary<=59999){
        return 1200
    }
    else if(grossSalary<=69999){
        return 1300
    }
    else if (grossSalary<=79999){
        return 1400
    }
    else if(grossSalary<=89999){
        return 1500
    }
    else if(grossSalary<=99999){
        return 1600
    }
    else {
        return 1700
    }
}
function calculateNssfDeductions(grossSalary){
    const maxEarnings=180000
    const nssfContribution=
    Math.min(grossSalary,maxEarnings)*nssfDeduction
return nssfContribution
}
function calculateNetSalary(basicSalary,benefits){
    const grossSalary=
    calculateGrossSalary(basicSalary,benefits)
    const payeTax=
    calculatePayeTax(grossSalary)
    const nhifDeductions=
    calculateNhifDeductions(grossSalary)
    const nssfDeductions=
    calculateNssfDeductions(grossSalary)
    const deductions=payeTax+nhifDeductions+nssfDeductions
    const netSalary=grossSalary-deductions
    return netSalary
}