// Lấy button buttonSeeMore và các thẻ introduction, moreInformation
var buttonSeeMore = document.querySelector(".introduction__see-more");
var introduction = document.querySelector(".introduction");
var moreInformation = document.querySelector(".more-information");

var handleClickSeeMore = function () {
    // Ẩn thẻ A bằng cách đặt display là none
    introduction.style.display = "none";
    // Hiển thị thẻ B bằng cách đặt display là block
    moreInformation.style.display = "flex";
}

// Hàm gửi email
function sendEmail() {
  // Lấy dữ liệu từ các ô nhập liệu
  var nameInput = document.getElementsByName("name")[0].value;
  var emailInput = document.getElementsByName("email")[0].value;
  var messageInput = document.getElementsByName("message")[0].value;

  // Thiết lập thông tin SMTP
  const smtpConfig = {
    host: "smtp.gmail.com",
    port: 587,
    username: "sonvo1611@gmail.com",
    password: "Sonkb12102002",
  };

  // Tạo đối tượng Email
  const emailObj = new Email({
    from: "sonvo1611@gmail.com",
    to: "sonvo1611@gmail.com",
    subject: "Thông báo từ trang web",
    message: `
      Tên: ${nameInput}
      Email: ${emailInput}
      Nội dung: ${messageInput}
    `,
  });

  // Gửi email
  emailObj.send(smtpConfig);

  // Tạo đối tượng Email xác nhận
  const emailObjConfirm = new Email({
    from: "sonvo1611@gmail.com",
    to: emailInput,
    subject: "Xác nhận nhận được message",
    message: `
      Chào bạn,

      Chúng tôi đã nhận được message của bạn. Chúng tôi sẽ phản hồi sớm nhất có thể.

      Cảm ơn bạn!
    `,
  });

  // Gửi email xác nhận
  emailObjConfirm.send(smtpConfig);
}

// var sendEmail = function() {
//     var nameInput = document.getElementsByName("name")[0].value;
//     var emailInput = document.getElementsByName("email")[0].value;
//     var messageInput = document.getElementsByName("message")[0].value;
    
//     var to = "sonvo1611@gmail.com";
    
//     var subject = "Contact from submission";
//     var body = "You have received a message from " + nameInput + " message "+ messageInput ;
    
//     Email.send({
//         SecureToken: "token",
//         To: to,
//         From: email,
//         Subject: subject,
//         Body: body,
//     }).then(function (message) {
//         alert("Thank you for contacting us. We will get back to you soon.");
//     });
// }

// Lấy ra các phần tử cần xử lý
const sections = document.querySelectorAll(".content__page");
const navItems = document.querySelectorAll(".side-bar__menu--item");

// Hàm để kiểm tra một phần tử có nằm trong phạm vi nhìn thấy hay không
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  // Thay đổi điều kiện để trả về true khi top hoặc bottom nằm trong khoảng từ 0 đến chiều cao của window
  return (
    (rect.top >= 0 && rect.top <= windowHeight) ||
    (rect.bottom >= 0 && rect.bottom <= windowHeight)
  );
}

// Hàm để xử lý khi scroll
function handleScroll() {
  // Khai báo một biến để lưu trữ chỉ số của phần tử section đầu tiên được nhìn thấy
  let visibleIndex = -1;
  // Duyệt qua các phần tử section
  sections.forEach((section, index) => {
    // Kiểm tra phần tử section có nằm trong phạm vi nhìn thấy hay không
    if (isInViewport(section)) {
      // Nếu có, gán chỉ số của phần tử section cho biến visibleIndex
      visibleIndex = index;
      // Dừng vòng lặp
      return;
    }
  });
  // Nếu có phần tử section được nhìn thấy
  if (visibleIndex !== -1) {
    // Duyệt qua các nav item
    navItems.forEach((navItem, index) => {
      // Nếu chỉ số của nav item bằng với chỉ số của phần tử section được nhìn thấy
      if (index === visibleIndex) {
        // Thêm class active cho nav item
        navItem.classList.add("active");
      } else {
        // Nếu không, xoá class active cho nav item
        navItem.classList.remove("active");
      }
    });
  }
}

// Thêm sự kiện scroll cho window và gọi hàm handleScroll
// window.addEventListener("scroll", handleScroll);
