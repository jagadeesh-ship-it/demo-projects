// import React from 'react';

// const Input = ({ title, id, placeholder, type = "text", value, setChangeValue, error }) => {
//     return (
//         <div style={{ marginBottom: "10px" }}>
//             <label htmlFor={id} style={{ display: "block", fontWeight: "bold" }}>{title}</label>
//             <input
//                 id={id}
//                 type={type}
//                 placeholder={placeholder}
//                 value={value}
//                 onChange={(e) => setChangeValue(e.target.value)}
//                 style={{
//                     width: "100%",
//                     padding: "8px",
//                     border: error ? "2px solid red" : "1px solid #ccc",
//                     borderRadius: "4px"
//                 }}
//             />
//             {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
//         </div>
//     );
// };

// export default Input;  


// import React from 'react';

// const Input = ({ title, id, type = "text", placeholder, value, onChange, error }) => {
//     return (
//         <div>
//             <label htmlFor={id}>{title}</label>
//             <input
//                 id={id}
//                 type={type}
//                 placeholder={placeholder}
//                 value={value}
//                 onChange={(e) => onChange(e.target.value)}
//             />
//             {error && <p style={{ color: "red" }}>{error}</p>}
//         </div>
//     );
// };

// export default Input;




import React from 'react';

const Input = ({ title, id, type = "text", placeholder, value, onChange, error }) => {
    return (
        <div>
            {/* <label htmlFor={id}>{title}</label> */}
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default Input;
