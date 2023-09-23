
let basicSalary = 130000
let benefits = 10000
const nssfDeductionate = 0.06;
function calculateGrossSalary(basicSalary, benefits) {
    return basicSalary + benefits;
}
grossSalary = calculateGrossSalary(basicSalary,benefits);

function calculatePayeTaxrate(gl) {
    if (grossSalary <= 24000) {
        return 0.1;
    } else if (grossSalary <= 32333) {
        return 0.25;
    } else if (grossSalary <= 500000) {
        return 0.3;
    } 
    else if (grossSalary <= 800000) {
        return 0.325;
    } 
    else {
        return 0.35;
    }
}
payeTaxRate = calculatePayeTaxrate(grossSalary);
const payeTax = grossSalary * payeTaxRate

function calculateNhifDeductions(grossSalary) {
    if (grossSalary <= 5999) {
        return 150;
    } else if (grossSalary <= 7999) {
        return 300;
    } else if (grossSalary <= 11999) {
        return 400;
    } else if (grossSalary <= 14999) {
        return 500;
    } else if (grossSalary <= 19999) {
        return 600;
    } else if (grossSalary <= 24999) {
        return 750;
    } else if (grossSalary <= 29999) {
        return 850;
    } else if (grossSalary <= 34999) {
        return 900;
    } else if (grossSalary <= 39999) {
        return 950;
    } else if (grossSalary <= 44999) {
        return 1000;
    } else if (grossSalary <= 49999) {
        return 1100;
    } else if (grossSalary <= 59999) {
        return 1200;
    } else if (grossSalary <= 69999) {
        return 1300;
    } else if (grossSalary <= 79999) {
        return 1400;
    } else if (grossSalary <= 89999) {
        return 1500;
    } else if (grossSalary <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
    
}
nhifDeductions = calculateNhifDeductions(grossSalary);

function calculateNssfDeductions(grossSalary) {
    const nssfContribution = grossSalary * nssfDeduction;
    return nssfContribution;
}
nssfDeductions = calculateNssfDeductions(grossSalary);
function calculateNetSalary(grossSalary, nssfDeduction, nhifDeductions, payeTax) {
    const deductions = payeTax + nhifDeductions + nssfDeduction;
    const netSalary = grossSalary - deductions;
    return netSalary;
}
netSalary = calculateNetSalary(grossSalary, nssfDeductionate, nhifDeductions, payeTax);
return  grossSalary- (nssfDeductionate + nhifDeductions + payeTax);