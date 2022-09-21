function bmiCalculator (weight, height) {
    let bmi = Math.round(weight / (height * height));

    if (bmi < 18.5) {
        interpretation = `Your BMI is ${bmi},so you are underweight.`;
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = `Your BMI is ${bmi},so you have a normal weight.`;
    }
    else if (bmi > 24.9) {
        interpretation = `Your BMI is ${bmi},so you are overweight.`;
    }

    return interpretation;
}
