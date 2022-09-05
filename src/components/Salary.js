import React, { useState } from 'react'
import './sal.css'

const Salary = () => {
    const [grossSalary,setGrossSalary] = useState(0)
    const [netSalary,setNetSalary] = useState(0)
    const [taxRate,setTaxRate] = useState(0)
    const [pension, setPension] = useState(0)

    const calSal = () => {
       
        
            if (grossSalary > 600 && grossSalary < 1651) {
                let taxR = (grossSalary * 0.1) - 60
                let penS = grossSalary * 0.07
                let netSal = grossSalary - taxR - penS
                
                setTaxRate(taxR)
                setPension(penS)
                setNetSalary(netSal)
            }
            else if (grossSalary > 1650 && grossSalary < 3201) {
                let taxR = (grossSalary * 0.15) - 142.5
                let penS = Math.floor(grossSalary * 0.07)
                let netSal = grossSalary - taxR - penS
     
                setTaxRate(taxR)
                setPension(penS)
                setNetSalary(netSal)
     
     
            }
                
                else if (grossSalary > 3200 && grossSalary < 5251) {
                let taxR = (grossSalary * 0.2) - 302.5
                let penS = grossSalary * 0.07
                let netSal = grossSalary - taxR - penS
     
                setTaxRate(taxR)
                setPension(penS)
                setNetSalary(netSal)
     
     
            }
                
                else if (grossSalary > 5250 && grossSalary < 7801) {
                let taxR = (grossSalary * 0.25) - 565
                let penS = grossSalary * 0.07
                let netSal = grossSalary - taxR - penS
     
                setTaxRate(taxR)
                setPension(penS)
                setNetSalary(netSal)
     
     
            }
                
                else if (grossSalary > 7800 && grossSalary < 10901) {
                let taxR = (grossSalary * 0.3) - 955
                let penS = grossSalary * 0.07
                let netSal = grossSalary - taxR - penS
     
                setTaxRate(taxR)
                setPension(penS)
                setNetSalary(netSal)
     
     
            }
                
                else if (grossSalary > 10900) {
                let taxR = (grossSalary * 0.35) - 1500
                let penS = grossSalary * 0.07
                let netSal = grossSalary - taxR - penS
     
                setTaxRate(taxR)
                setPension(penS)
                setNetSalary(netSal)
     
     
            }
     
            
            
            else { 
                setNetSalary(grossSalary)
            }
           
        
     setGrossSalary('')
    }
    return ( 
        <div className='salary'>
            <h1>Net Salary Calculator</h1>
            
            <div className='sal'>

            <div className='input_wrapper'>
           <input type="text" value={grossSalary} className="app_input" onChange={e => setGrossSalary(+e.target.value)} 
                        placeholder="Enter Your Gross Salary"  />
                    
            
            
             
                    
                </div>
                <div className='salBtn'>

                 <button onClick={calSal} className='btn'>አስላ</button>
                </div>

                 <div className='salList'>

            <h2>net Salary (የተጣራ ደሞዝ){netSalary}</h2>
            <h2>Your Tax Rate is (ታክስ) {taxRate}</h2>
            <h2>Your Pension is (ጡረታ) {pension}</h2>
            </div>
            </div>
           
            
            
           
        </div>
    );
}
export default Salary;