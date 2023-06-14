const isStringEmpty = (ipString) => {
    ipString=ipString.trim();
    if(null==ipString || ''==ipString || ipString.length==0)
        return true
    return false
}

module.exports = {
    isStringEmpty
}