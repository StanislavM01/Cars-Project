//Create or Edit
function brand(brand) {
    if (brand.length >= 3) {
        return { valid: true, message: '' }
    } else {
        return { valid: false, message: 'The minimum length is  3 characters.' }
    }
}

function model(model) {
    if (model.length >= 3) {
        return { valid: true, message: '' }
    } else {
        return { valid: false, message: 'The minimum length is  3 characters.' }
    }
}

function mileage(mileage) {
    mileage = Number(mileage)
    if (mileage >= 150) {
        return { valid: true, message: '' }
    } else {
        return { valid: false, message: 'The mileage required to be minimum 150 km.' }
    }
}

function firstRegistration(firstRegistration) {
    firstRegistration = Number(firstRegistration)
    if (firstRegistration >= 1900 && firstRegistration <= 2023) {
        return { valid: true, message: '' }
    } else {
        return { valid: false, message: 'The first registration required to be between 1900 and 2023 inclusive.' }
    }
}

function description(description) {
    if (description.length >= 10) {
        return { valid: true, message: '' }
    } else {
        return { valid: false, message: 'The minimum length is 10 characters.' }
    }
}

function price(price) {
    price = Number(price)
    if (price >= 500) {
        return { valid: true, message: '' }
    } else {
        return { valid: false, message: 'The price required to be minimum 500.' }
    }
}

function imageUrl(imageUrl) {
    let regex = /^https?:\/\/[^ \!@\$\^&\(\)\+\=]+(\.png|\.jpeg|\.gif|\.jpg|\.webp)$/
    if (regex.test(imageUrl)) {
        return { valid: true, message: '' }
    } else {
        return { valid: false, message: 'Please enter valid url address' }
    }
}

//Login or Register

function firstName(firstName) {
    if (firstName.length >= 1) {
        return { valid: true, message: '' }
    } else {
        return { valid: false, message: 'Please fill the first name ' }
    }
}

function lastName(firstName) {
    if (firstName.length >= 1) {
        return { valid: true, message: '' }
    } else {
        return { valid: false, message: 'Please fill the last name ' }
    }
}

function email(email) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (regex.test(email)) {
        return { valid: true, message: '' }
    } else {
        return { valid: false, message: 'Please enter valid email address ' }
    }
}

function password(password) {

    if (password.length >= 6) {
        return { valid: true, message: '' }
    } else {
        return { valid: false, message: 'The password need to contain minimum 6 characters' }
    }
}

function repPassword(repeatPassword, password) {
    if (repeatPassword.length < 6) {
        return { valid: false, message: 'The  repeat password need to contain minimum 6 characters' }
    } else if (repeatPassword !== password) {
        return { valid: false, message: 'The two passwords need to  match' }
    } else if (repeatPassword === password) {
        return { valid: true, message: '' }
    }
}

function phone(phoneNumber) {

    if (isNaN(phoneNumber)) {
        return { valid: false, message: 'Please enter valid phone number' }
    } else if (phoneNumber.length === 0) {
        return { valid: false, message: 'The phone number field cannot be empty' }
    } else {
        return { valid: true, message: '' }
    }
}

export default {
    brand,
    model,
    mileage,
    firstRegistration,
    description,
    price,
    imageUrl,
    firstName,
    lastName,
    email,
    password,
    repPassword,
    phone

}
