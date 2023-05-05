// Time Module (Default: America/Chicago)
module.exports.getdefaultTime = function getdefaultTime(current_timezone = "America/Chicago") {
  current_time = new Date().toLocaleString("en-US", { timeZone: current_timezone })
  return current_time;
}