/* Bài giảng Việt ngữ – các ví dụ có thể sửa và kiểm tra trực tiếp. */
window.CPP_LESSONS = [
{group:'01 · Bước đầu',id:'hello',title:'Xin chào C++',desc:'Lần đầu nhìn thấy luồng chạy từ main đến cout và return.',code:`#include <iostream>
using namespace std;
int main() {
    cout << "Xin chao C++!" << endl;
    cout << "Minh dang hoc lap trinh.";
    return 0;
}`,stdin:'',concept:'Máy tính đọc lệnh theo thứ tự','conceptBody':'Mọi chương trình có điểm bắt đầu: hàm main(). Lệnh cout in nội dung lên màn hình, endl là xuống dòng.',knowledge:[['main() là gì?','Đây là điểm bắt đầu của một chương trình C++ thông thường. Các câu lệnh bên trong chạy từ trên xuống dưới, trừ khi gặp lệnh rẽ nhánh hoặc vòng lặp.'],['cout và endl','cout đưa thông tin ra cửa sổ console. endl xuống dòng; ký hiệu \\n trong chuỗi cũng có thể xuống dòng.']],quiz:['Lệnh nào dùng để in kết quả?', ['cin','cout','return'],1,'cout đưa dữ liệu ra console, còn cin đọc dữ liệu nhập.']},
{group:'01 · Bước đầu',id:'variables',title:'Biến và kiểu dữ liệu',desc:'Một biến giống chiếc hộp có tên và chứa giá trị.',code:`#include <iostream>
using namespace std;
int main() {
    int tuoi = 15;
    double diem = 8.5;
    string ten = "An";
    cout << ten << " - " << tuoi << " tuoi" << endl;
    tuoi = tuoi + 1;
    cout << "Nam sau: " << tuoi;
    return 0;
}`,concept:'Biến = chiếc hộp lưu dữ liệu','conceptBody':'Di chuyển từng bước để xem tuoi từ 15 chuyển thành 16, còn ten và diem vẫn giữ nguyên.',knowledge:[['Các kiểu thường gặp','int: số nguyên; double: số thực; bool: đúng/sai; char: một kí tự; string: chuỗi kí tự.'],['Gán lại khác khai báo','int tuoi = 15 tạo biến; tuoi = tuoi + 1 lấy giá trị cũ, cộng 1 rồi lưu ngược vào cùng biến.']],quiz:['Sau lệnh tuoi = tuoi + 1, tuoi bằng bao nhiêu?', ['15','16','1'],1,'Đọc giá trị 15 cũ, cộng 1, rồi ghi lại 16.']},
{group:'01 · Bước đầu',id:'input',title:'Nhập dữ liệu bằng cin',desc:'Nhập test thật để thấy chương trình đọc số nào trước.',code:`#include <iostream>
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    int tong = a + b;
    cout << "Tong = " << tong << endl;
    return 0;
}`,stdin:'5 10',concept:'cin đọc lần lượt từng dữ liệu','conceptBody':'Với test 5 10: a nhận 5, b nhận 10. Sau đó tong nhận 15 và được in ra.',knowledge:[['Test (stdin) là gì?','Là các dữ liệu người dùng đưa cho chương trình. C++ đọc từ trái sang phải và từ trên xuống dưới.'],['Phân biệt cin / cout','cin >> a đọc dữ liệu cho biến a; cout << a xuất giá trị a.']],quiz:['Test là “2 7”. Biến b nhận số nào?', ['2','7','9'],1,'cin >> a >> b đọc 2 cho a, sau đó đọc 7 cho b.']},
{group:'01 · Bước đầu',id:'arithmetic',title:'Phép tính và chia lấy dư',desc:'So sánh / và %; tìm chữ số cuối của một số.',code:`#include <iostream>
using namespace std;
int main() {
    int a = 17;
    int b = 5;
    cout << a + b << endl;
    cout << a / b << endl;
    cout << a % b << endl;
    return 0;
}`,concept:'Chia nguyên khác chia số thực','conceptBody':'17 / 5 bằng 3 với hai toán hạng nguyên. 17 % 5 bằng 2 (số dư).',knowledge:[['Thứ tự phép toán','Nhân, chia và phần dư thực hiện trước cộng, trừ. Dùng ngoặc () để chỉ rõ thứ tự.'],['Khi nào dùng %?','Kiểm tra chẵn lẻ n % 2, chữ số cuối n % 10 hoặc chu kỳ lặp.']],quiz:['17 % 5 cho kết quả nào?', ['2','3','3.4'],0,'Vì 17 = 5 × 3 + 2.']},
{group:'02 · Điều kiện & vòng lặp',id:'ifelse',title:'if / else: Rẽ nhánh',desc:'Thấy điều kiện đúng và sai rẽ sang hai đường khác nhau.',code:`#include <iostream>
using namespace std;
int main() {
    int n;
    cin >> n;
    if (n % 2 == 0) {
        cout << "So chan";
    } else {
        cout << "So le";
    }
    return 0;
}`,stdin:'7',concept:'if là câu hỏi đúng hay sai','conceptBody':'Nếu n % 2 == 0 đúng, chạy nhánh if; nếu sai, bỏ qua if và chạy else. Thử test 7 rồi đổi thành 8.',knowledge:[['== không phải =','== so sánh hai giá trị có bằng nhau không; = là phép gán giá trị cho biến.'],['Sơ đồ nhánh','Tại dòng if, chương trình xét điều kiện; chỉ một nhánh được thực thi.']],quiz:['Với n = 8, dòng nào được chạy?', ['cout << "So chan"','cout << "So le"','Cả hai'],0,'8 chia 2 dư 0 nên điều kiện đúng.']},
{group:'02 · Điều kiện & vòng lặp',id:'else-if',title:'Nhiều điều kiện else if',desc:'Phân loại điểm và xem nhánh nào được chọn.',code:`#include <iostream>
using namespace std;
int main() {
    int diem;
    cin >> diem;
    if (diem >= 8) {
        cout << "Gioi";
    } else if (diem >= 6) {
        cout << "Kha";
    } else {
        cout << "Can co gang";
    }
    return 0;
}`,stdin:'7',concept:'Xét điều kiện từ trên xuống','conceptBody':'else if chỉ được thử khi điều kiện trước đó sai. Khi có một nhánh đúng, phần còn lại không chạy.',knowledge:[['Thứ tự rất quan trọng','Đặt mốc >= 8 trước >= 6; đảo ngược sẽ khiến điểm 9 bị xếp vào nhánh >= 6.'],['else là trường hợp còn lại','Không cần biểu thức điều kiện sau else.']],quiz:['Điểm 9 in ra gì?', ['Kha','Gioi','Can co gang'],1,'Kiểm tra >= 8 trước, nên 9 được xếp Giỏi.']},
{group:'02 · Điều kiện & vòng lặp',id:'for',title:'Vòng lặp for',desc:'Quan sát i đi qua từng giá trị, điều kiện đúng/sai ra sao.',code:`#include <iostream>
using namespace std;
int main() {
    int n;
    cin >> n;
    int sum = 0;
    for (int i = 1; i <= n; i++) {
        sum = sum + i;
    }
    cout << "Tong = " << sum;
    return 0;
}`,stdin:'5',concept:'for = bắt đầu → kiểm tra → chạy → tăng','conceptBody':'i đi từ 1 đến n. Mỗi vòng, sum được cộng i. Khi i = n + 1, điều kiện sai nên vòng lặp dừng.',knowledge:[['Ba phần trong for','int i = 1 (khởi tạo); i <= n (tiếp tục hay dừng); i++ (cập nhật sau mỗi vòng).'],['Theo dõi sum','Với n = 5: 0 → 1 → 3 → 6 → 10 → 15. Bấm “Từng bước” để xem từng thay đổi.']],quiz:['for (int i=1; i<=3; i++) lặp bao nhiêu lần?', ['2','3','4'],1,'Các lượt ứng với i = 1, 2, 3.']},
{group:'02 · Điều kiện & vòng lặp',id:'while',title:'Vòng lặp while',desc:'Dùng while để tách các chữ số và tính tổng.',code:`#include <iostream>
using namespace std;
int main() {
    int n;
    cin >> n;
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = n / 10;
    }
    cout << sum;
    return 0;
}`,stdin:'1234',concept:'while lặp khi điều kiện còn đúng','conceptBody':'Lấy chữ số cuối bằng n % 10, rồi xóa chữ số cuối bằng n / 10 (chia nguyên).',knowledge:[['Đừng quên thay đổi biến','Nếu n không thay đổi, điều kiện n > 0 có thể luôn đúng và gây lặp vô tận.'],['Ví dụ 1234','Các chữ số lấy ra lần lượt 4, 3, 2, 1. Tổng cuối bằng 10.']],quiz:['123 % 10 bằng?', ['12','3','1'],1,'Chia 123 cho 10 dư 3.']},
{group:'02 · Điều kiện & vòng lặp',id:'nested',title:'Hai vòng lặp lồng nhau',desc:'Nhìn i, j thay đổi để hiểu hàng và cột.',code:`#include <iostream>
using namespace std;
int main() {
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 4; j++) {
            cout << "*";
        }
        cout << endl;
    }
    return 0;
}`,concept:'Một vòng ngoài chứa nhiều lượt vòng trong','conceptBody':'Mỗi lượt của i, j chạy từ 1 tới 4 để in 4 dấu sao. Sau đó xuống dòng và chuyển sang hàng tiếp theo.',knowledge:[['Vòng ngoài và trong','Mỗi lần i đổi, vòng j bắt đầu từ đầu.'],['Độ phức tạp','Hai vòng lồng nhau với mỗi vòng n lượt thường mất O(n²) thao tác.']],quiz:['3 hàng, 4 dấu sao mỗi hàng: tổng có bao nhiêu *?', ['7','12','4'],1,'3 × 4 = 12 dấu sao.']},
{group:'03 · Mảng & chuỗi',id:'array',title:'Mảng và chỉ số',desc:'Mảng được hiển thị thành các ô có chỉ số 0, 1, 2,...',code:`#include <iostream>
using namespace std;
int main() {
    int a[5] = {4, 2, 8, 1, 6};
    cout << a[0] << endl;
    a[2] = 10;
    for (int i = 0; i < 5; i++) {
        cout << a[i] << " ";
    }
    return 0;
}`,concept:'a[0] là ô đầu tiên','conceptBody':'Một mảng có 5 phần tử sẽ có chỉ số từ 0 đến 4. Trình mô phỏng tô rõ từng ô và giá trị.',knowledge:[['Số phần tử và chỉ số','a[5] khai báo 5 ô; chỉ số hợp lệ là 0,1,2,3,4. a[5] là vượt giới hạn.'],['Gán vào phần tử','a[2] = 10 thay ô thứ 3, không thay toàn bộ mảng.']],quiz:['a[2] là phần tử thứ mấy?', ['2','3','4'],1,'C++ đánh chỉ số từ 0.']},
{group:'03 · Mảng & chuỗi',id:'array-sum',title:'Tính tổng mảng với test',desc:'N và các số được đọc từ input; cộng dồn trong vòng lặp.',code:`#include <iostream>
using namespace std;
int main() {
    int n;
    cin >> n;
    int a[100];
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += a[i];
    }
    cout << sum;
    return 0;
}`,stdin:'5\n1 3 5 7 9',concept:'Đọc mảng và duyệt mảng','conceptBody':'Số đầu tiên là n=5, năm số tiếp theo điền vào từng ô a[0]...a[4]. Mỗi lượt sum tăng lên.',knowledge:[['Đầu vào nhiều số','Whitespace (dấu cách, xuống dòng) đều có thể ngăn các giá trị cho cin.'],['Cộng dồn','sum += a[i] là cách viết gọn của sum = sum + a[i].']],quiz:['Mảng 1 3 5 7 9 có tổng?', ['20','25','30'],1,'1 + 3 + 5 + 7 + 9 = 25.']},
{group:'03 · Mảng & chuỗi',id:'max-array',title:'Tìm giá trị lớn nhất',desc:'Xem max thay đổi khi gặp phần tử lớn hơn.',code:`#include <iostream>
using namespace std;
int main() {
    int a[5] = {3, 8, 2, 11, 6};
    int best = a[0];
    for (int i = 1; i < 5; i++) {
        if (a[i] > best) {
            best = a[i];
        }
    }
    cout << best;
    return 0;
}`,concept:'best ghi nhớ số lớn nhất đã gặp','conceptBody':'Lần lượt so từng phần tử với best. Chỉ thay best khi tìm được số lớn hơn.',knowledge:[['Khởi tạo best','Lấy phần tử đầu tiên giúp thuật toán làm việc cả khi tất cả số âm.'],['Một lần duyệt','Độ phức tạp O(n), không cần sắp xếp mảng.']],quiz:['Trong mảng {3,8,2,11,6}, best cuối?', ['8','11','6'],1,'11 là số lớn nhất.']},
{group:'03 · Mảng & chuỗi',id:'strings',title:'string và ký tự',desc:'Truy cập từng ký tự như các ô của mảng.',code:`#include <iostream>
using namespace std;
int main() {
    string s = "HELLO";
    cout << s[0] << endl;
    cout << s.size() << endl;
    s[1] = 'A';
    cout << s;
    return 0;
}`,concept:'string là chuỗi ký tự có thứ tự','conceptBody':'s[0] là H; s.size() là 5; s[1] = \'A\' đổi ký tự E thành A.',knowledge:[['Ký tự và chuỗi','Ký tự đặt trong nháy đơn: \'A\'. Chuỗi đặt trong nháy kép: "HELLO".'],['Chỉ số','Ký tự đầu tiên cũng có chỉ số 0 như mảng.']],quiz:['"HELLO".size() bằng bao nhiêu?', ['4','5','6'],1,'Chuỗi HELLO có 5 ký tự.']},
{group:'03 · Mảng & chuỗi',id:'vector',title:'vector thay cho mảng tĩnh',desc:'Thêm phần tử bằng push_back, xem kích thước tăng.',code:`#include <iostream>
#include <vector>
using namespace std;
int main() {
    vector<int> v;
    v.push_back(8);
    v.push_back(3);
    v.push_back(5);
    cout << v.size() << endl;
    cout << v[1];
    return 0;
}`,concept:'vector là mảng có thể tự tăng kích thước','conceptBody':'Mỗi lần push_back thêm một ô cuối. size() là số phần tử đang có.',knowledge:[['vector và mảng thường','Mảng thường có kích thước cố định; vector tiện cho dữ liệu dài ngắn khác nhau.'],['push_back','v.push_back(x) thêm x vào cuối vector; truy cập v[i] giống mảng.']],quiz:['Sau 3 lệnh push_back, v.size() là?', ['2','3','4'],1,'Mỗi lần push_back tăng kích thước thêm một.']},
{group:'04 · Hàm & thuật toán',id:'function',title:'Hàm và giá trị trả về',desc:'Nhìn chương trình nhảy vào hàm tinhTong rồi quay lại main.',code:`#include <iostream>
using namespace std;
int tinhTong(int a, int b) {
    int kq = a + b;
    return kq;
}
int main() {
    int x = 4;
    int y = 9;
    int z = tinhTong(x, y);
    cout << z;
    return 0;
}`,concept:'Gọi hàm tạo một ngữ cảnh làm việc mới','conceptBody':'Khi chạy tinhTong(x, y), tham số a, b nhận bản sao 4 và 9; kết quả 13 được trả về và gán cho z.',knowledge:[['Tham số và đối số','a, b trong khai báo là tham số; x, y tại lời gọi là đối số.'],['return','Gửi kết quả về nơi gọi hàm và kết thúc lần gọi đó.']],quiz:['tinhTong(4, 9) trả về?', ['4','9','13'],2,'Thân hàm cộng a + b và return kq.']},
{group:'04 · Hàm & thuật toán',id:'recursion',title:'Đệ quy: Giai thừa',desc:'Xem ngăn xếp lời gọi fact(4) → fact(3) → fact(2).',code:`#include <iostream>
using namespace std;
int fact(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * fact(n - 1);
}
int main() {
    int n;
    cin >> n;
    cout << fact(n);
    return 0;
}`,stdin:'4',concept:'Đệ quy = hàm gọi lại chính nó','conceptBody':'Đến fact(1) thì dừng và trả 1. Các lời gọi lần lượt quay về: 2×1, 3×2, 4×6 = 24.',knowledge:[['Điều kiện dừng','Thiếu if (n <= 1) return 1 thì đệ quy có thể chạy mãi.'],['Call stack','Mỗi lần gọi hàm tạo một khung riêng lưu tham số và biến cục bộ.']],quiz:['fact(4) bằng?', ['16','24','12'],1,'4 × 3 × 2 × 1 = 24.']},
{group:'04 · Hàm & thuật toán',id:'linear-search',title:'Tìm kiếm tuyến tính',desc:'Thử từng ô cho tới khi bắt gặp giá trị cần tìm.',code:`#include <iostream>
using namespace std;
int main() {
    int a[6] = {9, 4, 7, 2, 8, 5};
    int x;
    cin >> x;
    int pos = -1;
    for (int i = 0; i < 6; i++) {
        if (a[i] == x) {
            pos = i;
            break;
        }
    }
    cout << pos;
    return 0;
}`,stdin:'8',concept:'Tìm tuyến tính: kiểm tra từng phần tử','conceptBody':'Đi từ a[0] đến a[5], kiểm tra == x, khi thấy x thì lưu chỉ số và thoát vòng lặp.',knowledge:[['-1 nghĩa là gì?','Nếu không tìm thấy, pos vẫn là -1 để nhận diện trường hợp thất bại.'],['Độ phức tạp','Trong trường hợp xấu nhất kiểm tra n phần tử ⇒ O(n).']],quiz:['Trong {9,4,7,2,8,5}, số 8 ở chỉ số?', ['4','5','3'],0,'Các chỉ số bắt đầu từ 0; 8 nằm ở a[4].']},
{group:'04 · Hàm & thuật toán',id:'bubble',title:'Bubble Sort – sắp xếp nổi bọt',desc:'Các ô liền kề đổi chỗ, mảng dần tăng từ trái sang phải.',code:`#include <iostream>
using namespace std;
int main() {
    int a[5] = {5, 1, 4, 2, 3};
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 4 - i; j++) {
            if (a[j] > a[j + 1]) {
                int temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
    for (int i = 0; i < 5; i++) {
        cout << a[i] << " ";
    }
    return 0;
}`,concept:'Bubble Sort đổi cặp đứng cạnh nhau','conceptBody':'Nếu ô trái lớn hơn ô phải, hoán đổi. Số lớn nhất dần về cuối sau mỗi lượt ngoài.',knowledge:[['Mỗi lần đổi chỗ','Dùng biến temp để không đánh mất giá trị trong quá trình hoán đổi.'],['Chi phí chạy','Bubble Sort thường O(n²), không hiệu quả bằng sort có sẵn cho dữ liệu lớn.']],quiz:['Sau khi sắp xếp tăng, ô đầu tiên là?', ['1','3','5'],0,'Trong {5,1,4,2,3}, số nhỏ nhất là 1.']},
{group:'04 · Hàm & thuật toán',id:'binary',title:'Tìm kiếm nhị phân',desc:'Thu hẹp left/right quanh mid trên mảng đã sắp xếp.',code:`#include <iostream>
using namespace std;
int main() {
    int a[7] = {2, 4, 6, 8, 10, 12, 14};
    int x;
    cin >> x;
    int left = 0;
    int right = 6;
    int pos = -1;
    while (left <= right) {
        int mid = (left + right) / 2;
        if (a[mid] == x) {
            pos = mid;
            break;
        } else if (a[mid] < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    cout << pos;
    return 0;
}`,stdin:'10',concept:'Mỗi bước loại bỏ khoảng một nửa mảng','conceptBody':'So sánh a[mid] với x. Nếu nhỏ hơn x, bỏ nửa trái; nếu lớn hơn thì bỏ nửa phải.',knowledge:[['Điều kiện bắt buộc','Mảng phải có thứ tự trước khi tìm nhị phân.'],['Độ phức tạp','Sau k bước chỉ còn khoảng n/2^k phần tử ⇒ O(log n).']],quiz:['Tìm kiếm nhị phân cần điều gì?', ['Mảng được sắp xếp','Mảng toàn số dương','Mảng không có số 0'],0,'Cần có thứ tự để biết nên bỏ phía nào.']},
{group:'04 · Hàm & thuật toán',id:'prefix',title:'Tổng tiền tố – Prefix sum',desc:'Mỗi ô lưu tổng mọi ô đứng trước hoặc chính nó.',code:`#include <iostream>
using namespace std;
int main() {
    int a[5] = {2, 1, 4, 3, 5};
    int p[5];
    p[0] = a[0];
    for (int i = 1; i < 5; i++) {
        p[i] = p[i - 1] + a[i];
    }
    cout << p[3] - p[0];
    return 0;
}`,concept:'Tiền xử lý để trả lời nhanh','conceptBody':'p lần lượt là 2, 3, 7, 10, 15. p[3] - p[0] = 8, chính là a[1]+a[2]+a[3].',knowledge:[['Công thức','p[i] = p[i−1] + a[i] nếu i≥1.'],['Truy vấn đoạn','Tổng a[l..r] = p[r] − p[l−1] khi l>0; còn l=0 thì bằng p[r].']],quiz:['p[2] trong ví dụ bằng?', ['7','4','3'],0,'2 + 1 + 4 = 7.']},
{group:'05 · Nâng cao & STL',id:'sort-stl',title:'sort và reverse',desc:'Một thao tác sắp xếp cả vector và đảo ngược thứ tự.',code:`#include <bits/stdc++.h>
using namespace std;
int main() {
    vector<int> v = {4, 1, 9, 2};
    sort(v.begin(), v.end());
    for (int i = 0; i < v.size(); i++) {
        cout << v[i] << " ";
    }
    return 0;
}`,concept:'STL cung cấp các thuật toán có sẵn','conceptBody':'sort(v.begin(), v.end()) sắp xếp vector tăng dần. Quan sát từng ô sau khi chạy lệnh.',knowledge:[['STL là gì?','Bộ thư viện mẫu chuẩn (Standard Template Library) bao gồm vector, sort, map,...'],['sort','std::sort thường có độ phức tạp O(n log n). Mô phỏng thể hiện kết quả của thao tác, không mô phỏng từng phép so sánh nội bộ.']],quiz:['sort(v.begin(),v.end()) mặc định?', ['Giảm dần','Tăng dần','Không đổi'],1,'Mặc định std::sort sắp tăng dần.']},
{group:'05 · Nâng cao & STL',id:'prime',title:'Kiểm tra số nguyên tố',desc:'Dùng vòng lặp và cờ bool để kiểm tra ước.',code:`#include <iostream>
using namespace std;
int main() {
    int n;
    cin >> n;
    bool prime = n >= 2;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        cout << "La so nguyen to";
    } else {
        cout << "Khong phai";
    }
    return 0;
}`,stdin:'29',concept:'Chỉ cần kiểm tra ước đến căn bậc hai','conceptBody':'Nếu n có ước d > √n thì n/d < √n. Do đó chỉ cần thử i*i <= n.',knowledge:[['Cờ bool','prime lưu true/false. Khi có ước số chia hết, chuyển thành false.'],['Phạm vi','Thuật toán này hiệu quả với một n tương đối nhỏ và dùng O(√n) lần thử.']],quiz:['29 là số nguyên tố?', ['Đúng','Sai'],0,'29 không có ước dương nào ngoài 1 và 29.']},
{group:'05 · Nâng cao & STL',id:'euclid',title:'ƯCLN – Euclid',desc:'GCD chạy từng vòng với phép lấy dư.',code:`#include <iostream>
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    while (b != 0) {
        int r = a % b;
        a = b;
        b = r;
    }
    cout << a;
    return 0;
}`,stdin:'48 18',concept:'ƯCLN(a,b) = ƯCLN(b,a%b)','conceptBody':'48,18 → 18,12 → 12,6 → 6,0. Khi b=0, a là ƯCLN.',knowledge:[['Tại sao đúng?','Các ước chung của a và b cũng là ước chung của b và a mod b.'],['Ứng dụng','Rút gọn phân số, tìm BCNN, toán số học.']],quiz:['ƯCLN(48,18) = ?', ['3','6','12'],1,'Cùng chia hết cho 6, không có ước chung lớn hơn.']},
{group:'05 · Nâng cao & STL',id:'pointer',title:'Con trỏ và tham chiếu',desc:'Tìm hiểu địa chỉ và giải tham chiếu, có phân tích cú pháp từng dòng.',code:`#include <iostream>
using namespace std;
int main() {
    int a = 10;
    int* p = &a;
    *p = 20;
    cout << a;
    return 0;
}`,concept:'Con trỏ chứa địa chỉ của một vùng nhớ','conceptBody':'&a lấy địa chỉ của a, *p truy cập giá trị tại địa chỉ p trỏ tới. Đây là bài minh họa khái niệm; bản mô phỏng chưa chạy phép con trỏ.',unsupported:true,knowledge:[['& và *','&a là địa chỉ biến a; *p là giá trị tại địa chỉ p.'],['An toàn','Không giải tham chiếu con trỏ rỗng hoặc con trỏ không hợp lệ.']],quiz:['*p trong ngữ cảnh p trỏ tới a là?', ['Địa chỉ p','Giá trị tại nơi p trỏ tới','Tên biến'],1,'Toán tử * là giải tham chiếu.']},
{group:'05 · Nâng cao & STL',id:'class',title:'class và hướng đối tượng',desc:'Giải thích thuộc tính, phương thức và object.',code:`#include <iostream>
using namespace std;
class Student {
public:
    string name;
    int score;
    void show() {
        cout << name << ": " << score;
    }
};
int main() {
    Student s;
    s.name = "An";
    s.score = 9;
    s.show();
    return 0;
}`,concept:'class là bản thiết kế, object là đối tượng cụ thể','conceptBody':'Mỗi Student có name, score và phương thức show(). Phần này có giải thích dòng nhưng chưa có trình thông dịch class.',unsupported:true,knowledge:[['class và object','class định nghĩa cấu trúc, mỗi object là một thể hiện riêng.'],['public','Thành viên trong vùng public có thể được truy cập từ bên ngoài lớp.']],quiz:['Student s; có nghĩa là?', ['Tạo một đối tượng s kiểu Student','Tạo hàm tên Student','Xóa s'],0,'s là đối tượng được tạo dựa trên lớp Student.']},
{group:'05 · Nâng cao & STL',id:'map',title:'map và đếm tần suất',desc:'Đếm số lần xuất hiện của từng giá trị bằng map.',code:`#include <bits/stdc++.h>
using namespace std;
int main() {
    map<int, int> freq;
    int a[5] = {2, 1, 2, 3, 2};
    for (int i = 0; i < 5; i++) {
        freq[a[i]]++;
    }
    cout << freq[2];
    return 0;
}`,concept:'map ánh xạ khóa đến giá trị','conceptBody':'freq[2] tăng ba lần, nên in ra 3. Hiện trình mô phỏng chưa hỗ trợ map, nhưng vẫn giải thích từng dòng.',unsupported:true,knowledge:[['Khóa và giá trị','map<int,int> liên kết một khóa số nguyên với một giá trị số nguyên.'],['Ưu điểm','Truy cập theo khóa, thường O(log n) trên std::map.']],quiz:['Trong {2,1,2,3,2}, số 2 xuất hiện?', ['2','3','4'],1,'Các vị trí 0,2,4 đều là số 2.']},
{group:'05 · Nâng cao & STL',id:'dynamic-programming',title:'Quy hoạch động – Fibonacci',desc:'Dùng mảng lưu đáp án bài toán con, tránh tính lặp.',code:`#include <iostream>
using namespace std;
int main() {
    int n;
    cin >> n;
    int dp[40];
    dp[0] = 0;
    dp[1] = 1;
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    cout << dp[n];
    return 0;
}`,stdin:'8',concept:'dp[i] dùng các kết quả đã tính trước','conceptBody':'dp[2] = dp[1] + dp[0], ... cho đến dp[n]. Với n=8 đáp án là 21.',knowledge:[['Bài toán con','Fibonacci: F(n) = F(n−1) + F(n−2), cùng điều kiện F(0)=0, F(1)=1.'],['Giới hạn ví dụ','Dùng n từ 1 đến 39; với n lớn hơn cần kiểu dữ liệu và phương pháp phù hợp.']],quiz:['F(8) trong dãy 0,1,1,2,3,... bằng?', ['13','21','34'],1,'F(8) = 21.']}
];
window.CPP_GROUPS=['01 · Bước đầu','02 · Điều kiện & vòng lặp','03 · Mảng & chuỗi','04 · Hàm & thuật toán','05 · Nâng cao & STL'];

// Adapter for the standalone interactive C++ Vision interface.
const GROUPS = window.CPP_GROUPS.map((title,i)=>({id:'group'+i,title:title.toLocaleUpperCase('vi'),level:i<2?'CƠ BẢN':i<4?'TRUNG CẤP':'NÂNG CAO'}));
const LESSONS = window.CPP_LESSONS.map(l=>({
 ...l,group:'group'+window.CPP_GROUPS.indexOf(l.group),
 input:l.stdin||'',concept:l.conceptBody||l.concept,
 points:(l.knowledge||[]).map(([heading,detail])=>heading+': '+detail),
 theory:!!l.unsupported
}));
const SAMPLES=[['input','Nhập hai số'],['for','Tính tổng bằng for'],['ifelse','Rẽ nhánh if / else'],['array-sum','Nhập và tính tổng mảng'],['bubble','Sắp xếp nổi bọt'],['binary','Tìm kiếm nhị phân'],['prime','Kiểm tra số nguyên tố'],['dynamic-programming','Quy hoạch động']];
