/**
 * Danh sách 47 Nữ Sinh Viên Tân Khóa Đại Học
 * Chúc Mừng Ngày Phụ Nữ Việt Nam 20/10
 */

const STUDENTS = [
  { id: 1, name: "Trần Gia Khánh", shortName: "Gia Khánh", flower: "🌸", wishQuote: "Luôn rực rỡ, tự tin và chinh phục mọi đỉnh cao học phần đại học!" },
  { id: 2, name: "Lê Võ Xuân Mai", shortName: "Xuân Mai", flower: "🌷", wishQuote: "Nụ cười tỏa nắng, kỳ đầu đại học ngập tràn điểm A+ và kỷ niệm đẹp!" },
  { id: 3, name: "Lê Tuệ Giang", shortName: "Tuệ Giang", flower: "🌺", wishQuote: "Thông minh, sắc sảo, học bổng đại học luôn nằm trọn trong tay!" },
  { id: 4, name: "Trần Thị Phương Như", shortName: "Phương Như", flower: "🌼", wishQuote: "Dịu dàng, đáng yêu, giảng đường đại học luôn chào đón với vạn điều may mắn!" },
  { id: 5, name: "Lê Thị Diễm Thuý", shortName: "Diễm Thuý", flower: "🌻", wishQuote: "Xinh đẹp rạng ngời, năng lượng tích cực lan tỏa đến mọi người xung quanh!" },
  { id: 6, name: "Nguyễn Thị Thanh Tuyền", shortName: "Thanh Tuyền", flower: "💐", wishQuote: "Thanh xuân đại học thật rực rỡ, deadline qua nhanh, GPA chạm đỉnh!" },
  { id: 7, name: "Trần Thị Thanh Thuận", shortName: "Thanh Thuận", flower: "🌸", wishQuote: "Mọi dự định đều thuận lợi hanh thông, luôn là niềm tự hào của cả lớp!" },
  { id: 8, name: "Trần Ngọc Ái My", shortName: "Ái My", flower: "✨", wishQuote: "Dễ thương, duyên dáng, mỗi ngày đến giảng đường là một ngày tràn ngập niềm vui!" },
  { id: 9, name: "Trần Thị Thanh Trúc", shortName: "Thanh Trúc", flower: "🌿", wishQuote: "Bản lĩnh, kiên cường như nhành trúc, học tập xuất sắc và luôn yêu đời!" },
  { id: 10, name: "Nguyễn Bích Huỳnh", shortName: "Bích Huỳnh", flower: "🌷", wishQuote: "Toả sáng lấp lánh như viên ngọc bích, học kỳ đầu suôn sẻ và rực rỡ!" },
  { id: 11, name: "Nguyễn Thị Ánh Diễm", shortName: "Ánh Diễm", flower: "🌺", wishQuote: "Ánh mắt biết cười, chúc bạn gặt hái trọn vẹn điểm 10 các môn đại cương!" },
  { id: 12, name: "Nguyễn Hồ Hà My", shortName: "Hà My", flower: "🌼", wishQuote: "Dịu dàng như dòng sông êm đềm, luôn hạnh phúc và đạt điểm số mơ ước!" },
  { id: 13, name: "Phan Như Hảo", shortName: "Như Hảo", flower: "🌻", wishQuote: "Vạn sự như ý, việc học như mơ, lúc nào cũng vui tươi và nhiệt huyết!" },
  { id: 14, name: "Nguyễn Thị Hồng Thu", shortName: "Hồng Thu", flower: "🍁", wishQuote: "Ngọt ngào và ấm áp như mùa thu, chúc bạn luôn xinh xắn và học giỏi!" },
  { id: 15, name: "Trần Tri Diệu Châu", shortName: "Diệu Châu", flower: "💎", wishQuote: "Tài năng và quý giá như ngọc châu, chúc bạn săn trọn học bổng kỳ này!" },
  { id: 16, name: "Trần Thị Kim Xuyến", shortName: "Kim Xuyến", flower: "✨", wishQuote: "Rạng rỡ, cuốn hút, bước vào giảng đường với tâm thế tự tin nhất!" },
  { id: 17, name: "Trần Hoán My", shortName: "Hoán My", flower: "🌸", wishQuote: "Nụ cười làm tan chảy mọi áp lực thi cử, chúc bạn luôn giữ vững phong độ!" },
  { id: 18, name: "Lê Ngọc Gia Hân", shortName: "Gia Hân", flower: "🌷", wishQuote: "Gia đình luôn hân hoan, bạn bè luôn yêu quý, 4 năm đại học tuyệt vời!" },
  { id: 19, name: "Nguyễn Trần Gia Linh", shortName: "Gia Linh", flower: "🌺", wishQuote: "Linh hoạt, thông minh, thuyết trình môn nào là thầy cô khen nức nở môn đó!" },
  { id: 20, name: "Lê Thị Cẩm Tú", shortName: "Cẩm Tú", flower: "💐", wishQuote: "Tương lai gấm hoa xán lạn, chúc Cẩm Tú luôn xinh đẹp và rạng ngời!" },
  { id: 21, name: "Huỳnh Khánh Vy", shortName: "Khánh Vy", flower: "🌼", wishQuote: "Năng động, tài giỏi, chúc Khánh Vy có những trải nghiệm sinh viên đáng nhớ!" },
  { id: 22, name: "Phạm Vũ Xuân Thương", shortName: "Xuân Thương", flower: "🌸", wishQuote: "Ấm áp và ngập tràn tình thương, chúc bạn luôn là đoá hoa rạng rỡ của lớp!" },
  { id: 23, name: "Đào Thị Phi Phụng", shortName: "Phi Phụng", flower: "🦋", wishQuote: "Cất cánh bay cao cùng ước mơ đại học, điểm A+ vẫy gọi từng kỳ!" },
  { id: 24, name: "Lê Ngọc Bảo Khanh", shortName: "Bảo Khanh", flower: "🌻", wishQuote: "Nụ cười tỏa nắng như hoa hướng dương, luôn tự tin bước đi trên con đường đã chọn!" },
  { id: 25, name: "Nguyễn Xuân Quỳnh", shortName: "Xuân Quỳnh", flower: "🌷", wishQuote: "Tâm hồn thi vị, xinh đẹp và duyên dáng, chúc bạn luôn ngập tràn may mắn!" },
  { id: 26, name: "Lê Sĩ Kiều My", shortName: "Kiều My", flower: "🌺", wishQuote: "Kiều diễm, ngọt ngào, chúc Kiều My vượt mọi kỳ thi nhẹ như lông hồng!" },
  { id: 27, name: "Hoàng Nguyễn Phương Linh", shortName: "Phương Linh", flower: "✨", wishQuote: "Thông minh và lanh lợi, chúc Phương Linh sớm rinh về học bổng loại Xuất sắc!" },
  { id: 28, name: "Phạm Thuỳ Linh", shortName: "Thuỳ Linh", flower: "🌸", wishQuote: "Thuỳ mị, đáng yêu, giảng đường đại học sẽ mang đến cho bạn nhiều người bạn tuyệt vời!" },
  { id: 29, name: "Trương Ánh Ngọc", shortName: "Ánh Ngọc", flower: "💎", wishQuote: "Sáng trong như ngọc, luôn giữ ngọn lửa nhiệt huyết của tuổi 18 đôi mươi!" },
  { id: 30, name: "Đởm Ngọc Bảo Châu", shortName: "Bảo Châu", flower: "💐", wishQuote: "Quý báu và kiêu hãnh, chúc Bảo Châu chạm mốc GPA 4.0 xuất sắc!" },
  { id: 31, name: "Võ Thị Hồng Nhung", shortName: "Hồng Nhung", flower: "🌹", wishQuote: "Quyến rũ như hoa hồng, vững vàng trước mọi bài tập lớn và đồ án!" },
  { id: 32, name: "Nguyễn Lương Như Quỳnh", shortName: "Như Quỳnh", flower: "🌷", wishQuote: "Dịu dàng, thuần khiết, chúc Như Quỳnh luôn được yêu thương và chở che!" },
  { id: 33, name: "Phùng Ngọc Thảo Ngân", shortName: "Thảo Ngân", flower: "🌼", wishQuote: "Tiếng cười rộn rã như ngân vang, chúc Thảo Ngân luôn ngập tràn niềm vui!" },
  { id: 34, name: "Phạm Ngọc Lam Linh", shortName: "Lam Linh", flower: "🌿", wishQuote: "Tươi mát và đầy sức sống, chúc Lam Linh hoàn thành mọi mục tiêu đại học!" },
  { id: 35, name: "Nguyễn Vĩnh Nam Uyên", shortName: "Nam Uyên", flower: "🌺", wishQuote: "Uyên bác, uyển chuyển, học sâu hiểu rộng và luôn rạng ngời tươi vui!" },
  { id: 36, name: "Tô Thu Thảo", shortName: "Thu Thảo", flower: "🌻", wishQuote: "Xinh đẹp như hoa thảo mộc, chúc bạn kỳ thi nào cũng đạt điểm số tuyệt đối!" },
  { id: 37, name: "Nguyễn Phương Gia Hân", shortName: "Gia Hân", flower: "✨", wishQuote: "Mang lại niềm vui cho cả lớp, chúc Gia Hân luôn giữ mãi nụ cười rạng rỡ!" },
  { id: 38, name: "Hồ Thị Bích Thuỷ", shortName: "Bích Thuỷ", flower: "🌊", wishQuote: "Trong trẻo như nước hồ thu, chúc Bích Thuỷ luôn an yên và học hành tấn tới!" },
  { id: 39, name: "Hoàng Anh Thư", shortName: "Anh Thư", flower: "🌸", wishQuote: "Khí chất thanh tao, học giỏi giang, chúc Anh Thư luôn dẫn đầu danh sách khen thưởng!" },
  { id: 40, name: "Huỳnh Ngọc Phương Trinh", shortName: "Phương Trinh", flower: "🌷", wishQuote: "Chân thành, đáng yêu, chúc Phương Trinh luôn toả sáng ở mọi góc giảng đường!" },
  { id: 41, name: "Huỳnh Ngọc Thuy Quyên", shortName: "Thuy Quyên", flower: "💐", wishQuote: "Hót hay như chim quyên, chúc bạn luôn năng động và gặt hái ngàn điểm tốt!" },
  { id: 42, name: "Dương Nguyễn Bảo Hân", shortName: "Bảo Hân", flower: "🌼", wishQuote: "Bảo bối mang lại niềm hân hoan, chúc Bảo Hân luôn hạnh phúc và thành công!" },
  { id: 43, name: "Nguyễn Phương Thảo", shortName: "Phương Thảo", flower: "🌻", wishQuote: "Cỏ thơm ngát hương, chúc Phương Thảo luôn lạc quan và học tập thật tốt!" },
  { id: 44, name: "Đoàn Huyền Trân", shortName: "Huyền Trân", flower: "💎", wishQuote: "Quý phái và duyên dáng, chúc Huyền Trân 4 năm thanh xuân đại học rực rỡ!" },
  { id: 45, name: "Tống Nguyễn Thảo My", shortName: "Thảo My", flower: "🌺", wishQuote: "Tươi tắn, năng động, chúc Thảo My luôn giữ vững nguồn năng lượng tích cực!" },
  { id: 46, name: "Trương Ngọc Ánh", shortName: "Ngọc Ánh", flower: "✨", wishQuote: "Toả sáng như ánh sao mai, chúc Ngọc Ánh luôn xinh đẹp và chạm tay vào ước mơ!" },
  { id: 47, name: "Lê Thị Anh Thư", shortName: "Anh Thư", flower: "🌸", wishQuote: "Tài sắc vẹn toàn, chúc Anh Thư có một thời đại học đáng nhớ và đong đầy kỷ niệm!" }
];

// Browser window global
if (typeof window !== 'undefined') {
  window.STUDENTS = STUDENTS;
}

// CommonJS module export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { STUDENTS };
}
