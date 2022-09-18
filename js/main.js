// JAVASCRIPT FOR CUSTOM CREATE ACCOUNT TAB

let createAccountStepOne = document.querySelector("#createAccountStepOne");
let createAccountStepTow = document.querySelector("#createAccountStepTow");
let createAccountForm = document.querySelector("#createAccountForm");

if(createAccountStepOne){
    createAccountStepOne.addEventListener("click", () => {
	createAccountStepTow.classList.remove("active");
	createAccountStepOne.classList.add("active");
	createAccountForm.innerHTML = ` 
                                            <div class="mb-3">
                                                <label for="crateAccountName" class="form-label">Email
                                                    address <span class="text-danger">*</span> </label>
                                                <input type="email" class="form-control" id="crateAccountName"
                                                    placeholder="Enter your name">
                                            </div>
                                            <div class="mb-3">
                                                <label for="crateAccountMobile" class="form-label">Mobile
                                                    <span class="text-danger">*</span> </label>
                                                <div class="input-group mb-3 m-0">
                                                    <input type="tel" class="form-control"
                                                        id="crateAccountMobile" placeholder="Enter your number">
                                                    <button class="btn btn-secondary rounded-3" type="button"
                                                        id="resentOtp">Button</button>
                                                </div>
                                            </div>

                                            <div class="mb-3">
                                                <label for="crateAccountName" class="form-label">Enter
                                                    OTP <span class="text-danger">*</span> </label>
                                                <div class="otp d-flex">
                                                    <input type="text" class="me-3 otpFild" maxlength="1">
                                                    <input type="text" class="me-3 otpFild" maxlength="1">
                                                    <input type="text" class="me-3 otpFild" maxlength="1">
                                                    <input type="text" class="me-3 otpFild" maxlength="1">
                                                    <input type="text" class="me-3 otpFild" maxlength="1">
                                                </div>
                                            </div>
                                            <button class="createAccountContinueButton">Continue</button>
                                        `;
});
}

if(createAccountStepTow){
    createAccountStepTow.addEventListener("click", () => {
	createAccountStepOne.classList.remove("active");
	createAccountStepTow.classList.add("active");

	createAccountForm.innerHTML = `
    
   
                            <div class="mb-2">
                                <input type="text" class="form-control" id="newAddressName">
                            </div>
                            <div class="mb-3">
                                <input type="number" class="form-control" id="newAddressNumber">
                            </div>
                            <div class="mb-2">
                                <label for="newAddressEmail" class="form-label">Email <span class="text-danger">*</span></label>
                                <input type="email" class="form-control" id="newAddressEmail" placeholder="Enter your Email">
                            </div>
                            <div class="mb-2">
                                <label for="newAddressState" class="form-label">State <span class="text-danger">*</span></label>
                                <select class="form-select" aria-label="Default select example" id="newAddressState">
                                    <option selected="">Select your State</option>
                                    <option value="1">Andhra Pradesh</option>
                                    <option value="2">Arunachal Pradesh</option>
                                    <option value="3">Assam</option>
                                    <option value="3">Bihar</option>
                                </select>
                            </div>
                            <div class="mb-2">
                                <label for="newAddressCity" class="form-label">City <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="newAddressMail" placeholder="Enter your City">
                            </div>
                            <div class="mb-2">
                                <label for="newAddressPin" class="form-label">Pin Code <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="newAddressMail" placeholder="Enter your Pin code">
                            </div>
                            <div class="mb-2">
                                <label for="newAddressLocality" class="form-label">Locality <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="newAddressMail" placeholder="Enter your Locality">
                            </div>
                            <div class="mb-2">
                                <label for="newAddressFlat" class="form-label">Flat no <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="newAddressMail" placeholder="Enter your Flat">
                            </div>
                            <button class="createAccountContinueButton my-2">Continue</button>
                       `;
});
}
// END CUSTOM CREATE ACCOUNT TAB
    const rangeInput = document.querySelectorAll(".range-input input"),
	priceInput = document.querySelectorAll(".price-input input"),
	range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
	input.addEventListener("input", (e) => {
		let minPrice = parseInt(priceInput[0].value),
			maxPrice = parseInt(priceInput[1].value);

		if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
			if (e.target.className === "input-min") {
				rangeInput[0].value = minPrice;
				range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
			} else {
				rangeInput[1].value = maxPrice;
				range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
			}
		}
	});
});

rangeInput.forEach((input) => {
	input.addEventListener("input", (e) => {
		let minVal = parseInt(rangeInput[0].value),
			maxVal = parseInt(rangeInput[1].value);

		if (maxVal - minVal < priceGap) {
			if (e.target.className === "range-min") {
				rangeInput[0].value = maxVal - priceGap;
			} else {
				rangeInput[1].value = minVal + priceGap;
			}
		} else {
			priceInput[0].value = minVal;
			priceInput[1].value = maxVal;
			range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
			range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
		}
	});
});


// SEARCH LIST
const searchResult = document.querySelector('.search-list');
const searchResultClose = document.querySelector('.search-close-btn');
const searchInput = document.querySelector('#main-search-input');

searchInput.addEventListener('input',()=>{
    searchResult.style.display= 'flex';
    if(searchInput.value === ''){
        searchResult.style.display= 'none';
    }
})


// OTP FIELD 
const otpFiels = document.querySelectorAll(".otpFild");

if (otpFiels) {
	otpFiels.forEach((el, index) => {
		el.addEventListener("input", () => {
			if (index !== 3) {
				if (el.value !== "") {
					el.nextElementSibling.focus();
				}
			}
			if (index !== 0) {
				if (el.value.length === 0) {
					el.previousElementSibling.focus();
				}
			}
		});
	});
}






