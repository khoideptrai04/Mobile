Lê Nguyên Khôi -22810310244
So sánh giữa FlatList và SectionList
1.Mục đích sử dụng:

FlatList: Được sử dụng để hiển thị danh sách đơn giản, không phân cấp. Thích hợp khi dữ liệu không cần tổ chức theo nhóm hoặc phân loại.
SectionList: Dùng để hiển thị danh sách có cấu trúc phân nhóm (section). Mỗi nhóm có tiêu đề riêng và chứa các phần tử liên quan.
2.Cấu trúc dữ liệu:

FlatList: Dữ liệu là một mảng các đối tượng đơn giản.
const products = [
  { id: '1', name: 'Product A', price: '10.00' },
  { id: '2', name: 'Product B', price: '15.00' },
];
SectionList: Dữ liệu là một mảng các đối tượng, trong đó mỗi đối tượng có thuộc tính title (tiêu đề nhóm) và data (mảng các phần tử).
const groupedProducts = [
  { title: 'Category A', data: ['Product A1', 'Product A2'] },
  { title: 'Category B', data: ['Product B1', 'Product B2'] },
];
3.Hiệu năng:

FlatList: Tối ưu hóa cho các danh sách dài bằng cách chỉ render các phần tử nằm trong viewport. Phù hợp cho dữ liệu lớn mà không cần cấu trúc phức tạp.
SectionList: Hiệu năng tương tự FlatList nhưng có thêm chi phí xử lý để quản lý tiêu đề và phân nhóm.
4.Tính dễ sử dụng:

FlatList: Dễ sử dụng hơn vì chỉ cần truyền một mảng đơn giản, không cần quan tâm đến cấu trúc phức tạp.
SectionList: Phức tạp hơn, yêu cầu dữ liệu có cấu trúc rõ ràng với các nhóm và tiêu đề, nhưng hữu ích khi cần phân loại hoặc nhóm thông tin.
5.Khi nào sử dụng?
FlatList: Khi bạn cần hiển thị một danh sách phẳng, như danh sách sản phẩm, bài viết, hoặc danh bạ không nhóm.
SectionList: Khi bạn cần hiển thị dữ liệu phân nhóm, như danh sách danh bạ phân theo chữ cái, nhóm sản phẩm theo danh mục, hoặc lịch trình theo ngày.
