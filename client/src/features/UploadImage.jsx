import React, { useState } from "react";
import "../assets/css/index.css";

const UploadImage = ({ setInputs }) => {
    const [base64Iamge, setBase64Image ]=useState(null)
    const getBase64 = file => {
        return new Promise(resolve => {
        let baseURL = "";
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            baseURL = reader.result;
            setBase64Image(baseURL);
            // setOnChangeText({ ...onChangeText, [name]: baseURL }); 
            resolve(baseURL);
        };
        });
    };

    
    return(
        <div  style={{marginBottom: "1.5rem"}}>
            <div  style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%",}}>
                
                <label for="dropzone-file" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "16rem", borderRadius: "0.5rem", borderWidth: "2px", borderColor: "#D1D5DB", borderStyle: "dashed", cursor: "pointer",backgroundColor: "#F9FAFB", 
                }}>
                    <div style={{display: "flex", paddinzgTop: "1.25rem", paddingBottom:" 1.5rem", flexDirection: "column", justifyContent: "center", alignItems: "center",}}>
                            { 
                                !base64Iamge && 
                                <svg aria-hidden="true" style={{marginBottom: "0.75rem", color: "#9CA3AF", width: "2.5rem", height: "2.5rem",}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            }
                             {
                                base64Iamge ? 
                                    <img alt="not fount" width={"250px"} src={base64Iamge} style={{ objectFit:"cover"}} className="max-w-md max-h-48"/>
                                    :
                                    <>
                                        <p style={{marginBottom: "0.5rem", color: "#6B7280", fontSize: "0.875rem", lineHeight: "1.25rem",}}><span style={{}} class="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p style={{color: "#6B7280", fontSize: "0.75rem", lineHeight: "1rem",}}>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </>
                            }
                        </div>
                    
                        <input id="dropzone-file" type="file" style={{display: "none", }} onChange={(event) => {
                            setInputs((prev) => ({ ...prev, "thumbnail": event.target.files[0]}))
                            getBase64(event.target.files[0])
                        }} />
                </label>
            </div> 
        </div>
    )
};

export default UploadImage