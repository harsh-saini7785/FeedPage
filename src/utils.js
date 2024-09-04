const phoneNumberRegex = /^[6-9]\d{9}$/;

export const formatTimeDifference = (postDate) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - new Date(postDate)) / 1000);

    if (diffInSeconds < 60) {
        return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return `${minutes} minutes ago`;
    } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        return `${hours} hours ago`;
    } else {
        const days = Math.floor(diffInSeconds / 86400);
        return `${days} days ago`;
    }
};

export function validatePhoneNumber(phoneNumber) {
    console.log(phoneNumberRegex.test(phoneNumber));
    return phoneNumberRegex.test(phoneNumber);
}

export const getOtp = (otp)=> {
    return otp.join("")
}