export const Validity = (data, passVal) => {
  const errors = {};
  /* ---------------------------------- name ---------------------------------- */
  if (!data.name) {
    errors.name = "Please insert your name";
  } else {
    delete errors.name;
  }
  /* ---------------------------------- Email --------------------------------- */
  if (!data.email) {
    errors.email = "Please enter your email";
  } else {
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
      errors.email = "Your email is invalid";
    } else {
      delete errors.email;
    }
  }

  /* -------------------------------- password -------------------------------- */

  if (!data.password) {
    errors.password = {
      lower: "At lease one lowercase character",
      upper: "At lease one uppercase character",
      special: "At lease one special  character",
      number: "At lease one number character",
      length: "At lease 8  characters",
    };
  } else {
    errors.password = {
      lower: "At lease one lowercase character",
      upper: "At lease one uppercase character",
      special: "At lease one special  character",
      number: "At lease one number character",
      length: "At lease 8  characters",
    };
    const lowercase = new RegExp("(?=.*[a-z])");
    const uppercase = new RegExp("(?=.*[A-Z])");
    const numberChar = new RegExp("(?=.*[0-9])");
    const specialChar = new RegExp("(?=.*[!@#$%^&*])");
    const length = new RegExp("(?=.{8,})");
    if (lowercase.test(data.password)) {
      delete errors.password.lower;
    }
    if (uppercase.test(data.password)) {
      delete errors.password.upper;
    }
    if (numberChar.test(data.password)) {
      delete errors.password.number;
    }
    if (specialChar.test(data.password)) {
      delete errors.password.special;
    }
    if (length.test(data.password)) {
      delete errors.password.length;
    }
  }

  /* ---------------------------- Confirm password ---------------------------- */
  if (!data.confirmpassword) {
    errors.confirmpassword = "Confirm password is requier";
  } else {
    if (passVal != data.confirmpassword) {
      errors.confirmpassword = "Your password is not match";
    } else {
      delete errors.confirmpassword;
    }
  }

  return errors;
};
