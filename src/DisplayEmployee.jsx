import  React  from  'react';

const  DisplayEmployee = ({ employee }) => {
    return (
        <div>
         <img  src={employee.picture.medium}  alt="employee"  /> 
            <ul>
                <li>Gender : {employee.gender}</li>
                <li>
                            Name : {employee.name.title}  {employee.name.last}{' '}
                            {employee.name.first}
                </li>
                <li>E-mail : {employee.email}</li>
                <li>
                            Location : {employee.location.street},
                            {employee.location.postcode}{' '}{employee.location.city}
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayEmployee;