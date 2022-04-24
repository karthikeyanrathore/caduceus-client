# Advanced Hospital Management System
> A Hospital Management System where we prioritize patients on the basis of their disease severity

### Problem Statement
According to a research in India, the ratio of doctor to patient is 1:1700. The low doctor-to-patient ratio creates complexity in the management of hospitals. 
As the study shows, the doctors can't offer an adequate amount of time to each patient and can't manage as well as can't predict to give more preference 
to which patient might be suffering. If a patient is suffering from diseases in multiple organs, the ideal solution for the doctor is to provide a reasonable 
amount of time to that patient. As there are many patients with different levels of severity of disease, doctors need a platform where they could rank 
patients by the level of severity and manage each patient due to the low ratio of doctor to patient.

Our solution to this problem will be to deliver a management portal where patients can be priotized on the basis of their disease severity.

Tests Included: Heart, Kidney and Liver.


## Run on your machine locally
### Frontend _(react + nextjs + tailwindcss)_:

Navigate to `/client`

1. run `npm install` to install dependencies
2. start up the development client with `npm run dev`

### Backend _(flask + sql)_:
1. Creating a new vitual environment `python3 -m venv LOCAL`
2. Activating the created virtual environment 
    1. For macOs `. Local/bin/activate`
    2. For windows `.\Local\Scripts\activate`
3. Installing flask `pip3 install flask`
4. Set FLASK_APP environment variable
    1. Unix Bash (Linux and Max) `export FLASK_APP=iq`
    2. Windows CMD `set FLASK_APP=iq`
    3. $env:FLASK_APP = "iq"
5. Initializing SQL Database `flask initdb`
6. Lastly running flask application `flask run`
