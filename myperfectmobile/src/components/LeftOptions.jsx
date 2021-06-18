import React, { useEffect, useState } from 'react'

function LeftOptions() {
    const [value, setValue] = useState(1000)
    const [usage, setUsage] = useState('Official')
    const [os, setOs] = useState('Android')
    const [brand, setBrand] = useState('Select Brand')

    useEffect(
        () => {
            document.getElementById(usage).checked = true;
            document.getElementById(os).checked = true;
        }
        , [])

    const changeUsage = e => {
        setUsage(e.target.id)
    }

    const changeOs = e => {
        setOs(e.target.id)
    }

    const changeBrand = e => {
        setBrand(e.target.id)
    }

    return (
        <div className="leftOp">
            {/* pricerange */}
            <label for="customRange2" class="form-label">Select Price Range</label>

            <input type="range" className="w-100" name="" id="" min="10000" max="50000" step="10000" onChange={
                e => {
                    setValue(e.target.value)
                }
            } />
            <br />

            <label htmlFor=""> upto {value} </label>


            {/* usage */}
            <div className="mt-4">
                <b>Usage</b>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="usage" id="Official" onChange={changeUsage} />
                <label class="form-check-label" for="">
                    Official
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="usage" id="Gaming" onChange={changeUsage} />
                <label class="form-check-label" for="">
                    Gaming
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="usage" id="Photography" onChange={changeUsage} />
                <label class="form-check-label" for="">
                    Mobile Photography
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="usage" id="Personal" onChange={changeUsage} />
                <label class="form-check-label" for="">
                    Personal
                </label>
            </div>

            {/* prefered OS */}
            <div className="mt-4">
                <b>Operating System</b>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="os" id="Android" onChange={changeOs} />
                <label class="form-check-label" for="">
                    Android
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="os" id="BlackBerry" onChange={changeOs} />
                <label class="form-check-label" for="">
                    BlackBerry
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="os" id="iOS" disabled onChange={changeOs} />
                <label class="form-check-label" for="">
                    iOS
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="os" id="Windows" disabled onChange={changeOs} />
                <label class="form-check-label" for="">
                    Windows
                </label>
            </div>

            {/* Brands */}
            <div className="mt-4">
                <div class="dropdown">
                    <button class="btn dropdown-toggle w-100 brand" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {brand}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><div class="dropdown-item pointer" onClick={changeBrand} id="Apple" >Apple</div></li>
                        <li><div class="dropdown-item pointer" onClick={changeBrand} id="Acer" >Acer</div></li>
                        <li><div class="dropdown-item pointer" onClick={changeBrand} id="Asus" >Asus</div></li>
                        <li><div class="dropdown-item pointer" onClick={changeBrand} id="Samsung" >Samsung</div></li>
                        <li><div class="dropdown-item pointer" onClick={changeBrand} id="Samsung" >Samsung</div></li>
                        <li><div class="dropdown-item pointer" onClick={changeBrand} id="Samsung" >Samsung</div></li>
                        <li><div class="dropdown-item pointer" onClick={changeBrand} id="Samsung" >Samsung</div></li>
                        <li><div class="dropdown-item pointer" onClick={changeBrand} id="Samsung" >Samsung</div></li>
                        <li><div class="dropdown-item pointer" onClick={changeBrand} id="Samsung" >Samsung</div></li>
                        <li><div class="dropdown-item pointer" onClick={changeBrand} id="Samsung" >Samsung</div></li>
                        <li><div class="dropdown-item pointer" onClick={changeBrand} id="Samsung" >Samsung</div></li>
                        <li><div class="dropdown-item pointer" onClick={changeBrand} id="Samsung" >Samsung</div></li>
                        <li><div class="dropdown-item pointer" onClick={changeBrand} id="Samsung" >Samsung</div></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LeftOptions
