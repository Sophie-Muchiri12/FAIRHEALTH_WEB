document.addEventListener('DOMContentLoaded',function(){
    const patientForm = document.getElementById('patient-form')
    const PatientContainer = document.getElementById('patient-container')
    const editbutton = document.getElementById('editbtn')
    const deletebutton = document.getElementById('deletebtn')
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

    const fetchPatients = async() =>{
        const response = await fetch('http://localhost:3000/patients')
        const data = await response.json()
        console.log(data)
    }

    fetchPatients()
    function generateId() {
        let lastID = parseInt(localStorage.getItem('lastID') || '0', 10);
        lastID += 1;
        localStorage.setItem('lastID', lastID.toString());
        return lastID.toString(); // Always return as string
    }
    

    patientForm.addEventListener('submit', async(e) =>{
        e.preventDefault()
        const id = document.getElementById('idinput').value
        const name = document.getElementById('name').value
        const age = document.getElementById('age').value
        const gender= document.getElementById('gender').value
        const condition = document.getElementById('condition').value

        try{
        if(id){
            await fetch(`http://localhost:3000/patients/${id}`,{
                method:'PUT',
                headers:{
                    'Content-Type' : 'application/json'
                },

                body:JSON.stringify({id,name,age,gender,condition})
            })

            appendAlert('Patient details edited successfully', 'success')
        }
        
        else{
            const newId = generateId()

            await fetch ('http://localhost:3000/patients',{
                method:'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },

                body:JSON.stringify({id:newId,name,age,gender,condition})
            })

            appendAlert('Patient added successfully!', 'success')

        }

        patientForm.reset()
    }

    catch(error){
        console.error('An error occurred:', error);
        appendAlert('An error occured while submitting patient details', 'danger')
    }


    })

        const searchPatient = async () =>{
            const searchName = document.getElementById('search-name').value.trim().toLowerCase()

            if(searchName){
                try{
                    const response = await fetch('http://localhost:3000/patients')
                    const patients = await response.json()

                    const filteredPatient = patients.filter(patient =>
                        patient.name.toLowerCase().includes(searchName)         //.filter will filter an array of objects based on the condition

                  )

                    displaySearch(filteredPatient)

                }

               catch(error){
                console.error('Error fetching patient')
                appendAlert('No Patient Found', 'warning')
               }
            }

            else{
                return 'No Patient Found'
            }
        }

            function displaySearch(SearchedPatient){
                

                

                if(SearchedPatient.length > 0){
                        const patient = SearchedPatient[0]
                        document.getElementById('idinput').value = patient.id

                       document.getElementById('patientname').value = patient.name
                       document.getElementById('patientage').value = patient.age
                        document.getElementById('patientgender').value = patient.gender
                      document.getElementById('patientcondition').value = patient.condition
                
                    

                }

                else{
                    PatientContainer.textContent = 'No patient found'
                    appendAlert('No patient found.', 'warning')
                }
            }
            window.searchPatient = searchPatient;    


            editbutton.addEventListener('click', async () =>{

                const id = document.getElementById('idinput').value

                if(!id){
                    console.error('No patient found')
                    appendAlert('No patient selected for editing', 'danger')

                }

                try{
                    const response = await fetch(`http://localhost:3000/patients/${id}`)
                    const patient = await response.json()
                  
                    document.getElementById('name').value = patient.name
                    document.getElementById('age').value = patient.age
                     document.getElementById('gender').value = patient.gender
                   document.getElementById('condition').value = patient.condition

                  

                }

                catch(error){
                    console.error('error fetching patient',error)
                    appendAlert('Error fetching patient', 'danger')
                }

            })

            deletebutton.addEventListener('click', async()=>{

                const id = document.getElementById('idinput').value

                if(!id){
                     appendAlert('No patient selected for deletion', 'danger')

                     return
                }
                    await fetch(`http://localhost:3000/patients/${id}`,{
                        method:'DELETE'

                    })

                    appendAlert('Patient deleted successfully', 'success')
                    patientForm.reset()

            })


            const appendAlert = (message, type) => {
                const wrapper = document.createElement('div');
                wrapper.innerHTML = [
                    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                    `   <div>${message}</div>`,
                    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                    '</div>'
                ].join('');
        
                alertPlaceholder.append(wrapper);
            };
 })