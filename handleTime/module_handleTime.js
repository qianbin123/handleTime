function handleTime(time) {
  time = new Date(time).getTime();
  let year = new Date(time).getFullYear();
  let month = new Date(time).getMonth() + 1;
  let day = new Date(time).getDate();
  let hour = new Date(time).getHours();
  let minute = new Date(time).getMinutes();
  let time1 = Date.now();

  //转成秒
  let showTime = Math.floor((time1 - time) / 1000);
  if (showTime < 60) {
    //分

    return showTime + 1 + "秒前";
  } else if (showTime < 60 * 60) {
    //时

    return Math.floor(showTime / 60) + "分前";
  } else if (showTime < 24 * 60 * 60) {
    //天

    if (minute < 10) {
      minute = "0" + minute;
    }
    return hour + ":" + minute;
  } else if (showTime < 365 * 24 * 60 * 60 * 1000) {
    //年
    return month + "月" + day + "日";
  } else {
    if (day < 10) {
      day = "0" + day;
    }

    if (minute < 10) {
      minute = "0" + minute;
    }
    return year + "-" + month + "-" + day + " " + hour + ":" + minute;
  }
}

exports.handleTime = handleTime;