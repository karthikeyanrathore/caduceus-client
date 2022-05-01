# Advanced Hospital Management System
A Hospital Management System where we prioritize patients on the basis of their disease severity

## Problem Statement
According to a research in India, the ratio of doctor to patient is 1:1700. The low doctor-to-patient ratio creates complexity in the management of hospitals. 
As the study shows, the doctors can't offer an adequate amount of time to each patient and can't manage as well as can't predict to give more preference 
to which patient might be suffering. If a patient is suffering from diseases in multiple organs, the ideal solution for the doctor is to provide a reasonable 
amount of time to that patient. As there are many patients with different levels of severity of disease, doctors need a platform where they could rank 
patients by the level of severity and manage each patient due to the low ratio of doctor to patient.

Our solution to this problem will be to deliver a management portal where patients can be priotized on the basis of their disease severity.

Tests Included: Heart, Kidney and Liver.


## Development
### Frontend [react, nextjs, tailwindcss]:
```
# Navigate client dir
cd client/

# Install dependencies
npm install

# run client server
npm run dev
```


### Backend [flask, MySQL]

**Unix**
```
chmod +x main.sh
./main.sh
```

**Windows**
```
# LOCAL env
python3 -m venv LOCAL

# activate env
.\Local\Scripts\activate

# install flask
pip3 install flask

# set env variable
set FLASK_APP=iq or $env:FLASK_APP = "iq"

# clean or init db
flask initdb

# run server
flask run
```

## Deployment
* AWS cloud service


## Authors
* Manish Sharma
* Tanuj Sharma
* Karthikeyan Rathore
