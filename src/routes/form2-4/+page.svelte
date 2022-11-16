<script>
    import headTitle from "$lib/images/photo-title.png";
    import { goto } from '$app/navigation';

    let radioSelector = 'yes';
    let selected = 'Plain';
    let submitted = false;


    // /** @type {import('./$types').PageData} */
    // export let get;

    function sendEmail(e) {
        console.log(e.target)
        const formData = new FormData(e.target)
        console.log(formData)

        goto('./thank-you')
        //fetch("/api/sendmail")
    }

</script>

<img class="title" src={headTitle}  alt="SvelteKit"/>

<div class="top">
    <span class="title-line"><span class="title-word"></span>Sell your photos directly and choose the licensing scheme you want!<br><br></span>

    <p class="paragraph">
        On SPOZZ.club you can sell your photos directly, build a personal artist page and promote your work!<br><br>
        You get paid immediately for every sale and can collect royalties from secondary sales.<br><br>
        SPOZZ.club provides you a set of tools to create any number of NFTs from your photos and to promote and monetize it.<br><br>
        Choose from different licensing models and avoid the middlemen commissions.
    </p>
</div>

<div class="cardo">
  <div class="card-header">Pre-register now to be among the first on the SPOZZ.club platform on launch day.</div>

  <div class="card-body">
    <form class="content" class:submitted on:submit|preventDefault={sendEmail}>
        <label>Artist / Band Name<br>
            <input id="name" name="name" type="text"  placeholder="    / enter information" autocomplete required/>
        </label>
        <label>Contact Person First Name<br>
            <input id="first-name" name="first-name" type="text" placeholder="    / enter information" autocomplete required/>
        </label>
        <label>Contact Person Last Name<br>
            <input id="last-name" name="last-name" type="text" placeholder="    / enter information" autocomplete required/>
        </label>
        <label>Role<br>
            <select id="role" name="role" required>
                <option>/ select your role</option>
                <option value="PH">Photographer</option>
                <option value="PU">Publisher</option>
                <option value="TM">Project Team member</option>
                <option value="PM">Project Manager</option>
                <option value="PP">Project Promotor</option>
                <option value="Other">Other</option>
            </select>
        </label>
        <label>E-Mail<br>
            <input id="email" name="email" type="email" autocomplete placeholder="    / enter your email@domain" required value=''/>
        </label>
        <label>Phone<br>
            <input id="phone" name="phone" type="tel" placeholder="    / enter information" autocomplete required/>
        </label>
        <label>Country<br>
            <select id="country" name="country" required>
                <option>/ select country</option>
                <option value="AF">Afghanistan</option>
                <option value="AX">Aland Islands</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo</option>
                <option value="CD">Congo, Democratic Republic of the Congo</option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Cote D'Ivoire</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CW">Curacao</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (Malvinas)</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GG">Guernsey</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard Island and Mcdonald Islands</option>
                <option value="VA">Holy See (Vatican City State)</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran, Islamic Republic of</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IM">Isle of Man</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JE">Jersey</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KP">Korea, Democratic People's Republic of</option>
                <option value="KR">Korea, Republic of</option>
                <option value="XK">Kosovo</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Lao People's Democratic Republic</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libyan Arab Jamahiriya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macao</option>
                <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia, Federated States of</option>
                <option value="MD">Moldova, Republic of</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="AN">Netherlands Antilles</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PS">Palestinian Territory, Occupied</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RO">Romania</option>
                <option value="RU">Russian Federation</option>
                <option value="RW">Rwanda</option>
                <option value="BL">Saint Barthelemy</option>
                <option value="SH">Saint Helena</option>
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint Lucia</option>
                <option value="MF">Saint Martin</option>
                <option value="PM">Saint Pierre and Miquelon</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="CS">Serbia and Montenegro</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SX">Sint Maarten</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS">South Georgia and the South Sandwich Islands</option>
                <option value="SS">South Sudan</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard and Jan Mayen</option>
                <option value="SZ">Swaziland</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syrian Arab Republic</option>
                <option value="TW">Taiwan, Province of China</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania, United Republic of</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks and Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UM">United States Minor Outlying Islands</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VE">Venezuela</option>
                <option value="VN">Viet Nam</option>
                <option value="VG">Virgin Islands, British</option>
                <option value="VI">Virgin Islands, U.s.</option>
                <option value="WF">Wallis and Futuna</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
            </select>
        </label>
        <label>Spotify<br>
            <input type="text" placeholder="    / enter information"/>
        </label>
        <label>Youtube<br>
            <input type="text" placeholder="    / enter information"/>
        </label>
        <label>Instagram<br>
            <input type="text" placeholder="    / enter information"/>
        </label>
        <label>Twitter<br>
            <input type="url" placeholder="    / enter information"/>
        </label>
        <label>Website<br>
            <input type="url" placeholder="    / enter information"/>
        </label>
        <label>Comments<br>
            <input class="comment" type="text" placeholder=""/>
        </label>

        <div class="bottom-text">
            <span>Thank you for your interest in SPOZZ.club.<br></span>
            <span style="font-weight: bold;">We will contact you shortly!<br></span>
        </div>

        <div class="card-radio">
            <span class="blue-text">Do you want to receive news by e-mail and subscribe to our newsletter?<br></span>

            <div class="radio-buttons">
                <label>
                    <input type="radio" bind:group={radioSelector} value="yes">Yes 
                </label>

                <label>
                    <input type="radio" bind:group={radioSelector} value="no">No 
                </label>
            </div>
        </div>

        <button type="submit" class="btn btn-primary" on:click={() => submitted = true}>SUBMIT</button>
    </form>
  </div>
</div>

<style>
    .top {
        margin-top: 2rem;
        margin-bottom: 2rem;
        max-width: 500px;
    }
    .title-word {
        font-weight: 800;
    }
    .title-line {
        font-weight: 600;
    }
    .paragraph {
        line-height: 15pt;
        color: #ffff;
        text-align: justify;
        text-justify: inter-word;
    }
    .submitted input:invalid {
		border: 1px solid #c00;
	}

	.submitted input:focus:invalid {
		outline: 1px solid #c00;
	}
    .blue-text {
        font-weight: bold;
        font-size: 10pt;
        text-transform: capitalize;
        background: linear-gradient(90deg, #713ACA 0%, #4786D6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    .cardo {
        display: flex;
        flex-direction: column;
        align-content: center;
        margin: auto;
        width: 100%;
        height: 100%;
        max-width: 750px;

        background: #FFFFFF;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
        border-radius: 21px;
        overflow:hidden;
    }
    .card-body {
        display: flex;
        flex-direction: column;
        align-items:center;
    }

    .card-header {
        font-weight: bold;
        display: block;
        text-align: center;
        font-size: 10pt;
        color: #fff;
        background: linear-gradient(90deg, #713ACA 0%, #4786D6 100%);
    }

    .card-radio {
        margin: auto;
        margin-bottom: .9rem;
        display: flex;
        flex-direction: column;
    }
    .btn {
        margin: auto;
        width: 107px;
        font-size: 11px;
        line-height: 132.1%;
        letter-spacing: 0.105em;
        background: linear-gradient(90deg, #713ACA 0%, #4786D6 100%);
        border-radius: 5px;
    }
    form {
        text-align: center;
    }
    .content > label {
        font-family: 'Montserrat';
        font-weight: bold;
        font-size: 15px;
        line-height: 210%;
        letter-spacing: 0.000em;
        max-width: 580px;
        width: 100%;
        margin: auto;
        margin-top: .8rem;
        text-align: left;
        color: #686868;
    }
    .content > label > input {
        accent-color: rgb(93, 53, 252);
        max-width: 580px;
        width: 100%;
        margin: auto;
        border-radius: 9px;
        opacity: .5;
        border: 1px solid;
    }
    .bottom-text > span {
        color: #7B7B7B;
    }
    .title {
        mix-blend-mode: overlay;
    }
    .comment {
        height: 100px;
    }
    .bottom-text {
        margin: 2rem;
    }
    input {
        outline: none;
        font-size: 9pt;
        accent-color: rgb(93, 53, 252);
    }
    select {
        font-size: 9pt;
        text-indent: 7pt;
        background-color: white;
        accent-color: rgb(93, 53, 252);
        max-width: 580px;
        width: 100%;
        margin: auto;
        border-radius: 9px;
        opacity: .5;
        border: 1px solid;
        outline: none;
        height: 35.5px;
    }
    .radio-buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: .5rem;
        margin-right: 2.3rem;
    }
    .radio-buttons > label > input {
        margin-left: 2rem;
        margin-right: .7rem;
        margin-bottom: 3rem;
    }
    button {
        margin-bottom: .5rem;
    }
</style>