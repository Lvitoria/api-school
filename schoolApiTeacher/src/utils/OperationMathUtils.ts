export class OperationMathUtils {
    addNumber (grades: Array<number>){
        let total = 0
        grades.map(item => total = total+item )
        return total
    }

    smallerNumber (grades: Array<number>){
        return Math.min(...grades);
    }

    largerNumber (grades: Array<number>){
        return Math.max(...grades);
    }

    stateThisYear (grades: Array<number>){
        let totalGrade:number = 0
        let countGrade:number = 0
        for(const prop in grades) {
            totalGrade = totalGrade + grades[prop]
            countGrade++
        }
        const resultGrade = totalGrade/countGrade

        if(resultGrade >= 6){
            return 'Aprovado'
        }
        if(resultGrade < 6 && resultGrade >= 4){
            return 'Recuperação'
        }
        if(resultGrade < 4){
            return 'Reprovado'
        }
    }


}