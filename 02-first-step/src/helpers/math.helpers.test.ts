import { describe, expect, test }  from 'vitest'
import { add, multiply } from './math.helpers';

describe('add', () =>{

    test('should add two add numbers', () => {
        
        // ! 1.Arrange
        const a = 2
        const b = 4

        // ! 2.Act 
        const result = add(a,b)

        // ! 3. Assert
        expect(result).toBe(a+b)
    })

})


describe('subtract', () =>{
    
        test('should add two negative numbers', () => {
        
        // ! 1.Arrange
        const a = -2
        const b = -4

        // ! 2.Act 
        const result = add(a,b)

        // ! 3. Assert
        expect(result).toBe(a+b)
    })

})

describe('multiply', () =>{
    
        test('should multiply two numbers', () => {
        
        // ! 1.Arrange
        const a = 2
        const b = 4

        // ! 2.Act 
        const result = multiply(a,b)

        // ! 3. Assert
        expect(result).toBe(a * b)
    })

})