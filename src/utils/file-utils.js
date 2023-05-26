
function sanitize_filename(filename){
    filename = filename.replace("/","_")
    filename = filename.replace("{","_")
    filename = filename.replace("}","_")
    filename = filename.replace("#","_")
    filename = filename.replace("%","_")
    filename = filename.replace("&","_")
    filename = filename.replace("<","_")
    filename = filename.replace(">","_")
    filename = filename.replace("$","_")
    filename = filename.replace("-","_")
    filename = filename.replace("+","_")
    filename = filename.replace("=","_")
    return filename;
}

module.exports = {sanitize_filename};