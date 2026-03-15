---
name: fe-core-vanilla
description: Xây dựng giao diện web production-grade bằng HTML, CSS và JavaScript thuần. Dùng khi người dùng muốn web/app không phụ thuộc framework (React/Vue/Angular), để luyện nền tảng FE hoặc tối ưu performance.
---

# fe-core-vanilla

Xây dựng giao diện web production-grade bằng HTML, CSS và JavaScript thuần. Dùng khi người dùng muốn web/app không phụ thuộc framework (React/Vue/Angular), để luyện nền tảng FE hoặc tối ưu performance.

**License**: custom

## When to use this skill

Sử dụng skill này khi:

- Người dùng yêu cầu:
  - Trang web, landing page, blog, CV, dashboard đơn giản.
  - Component UI (navbar, modal, tab, accordion, dropdown, table, form…).
  - Tính năng tương tác cơ bản (validate form, toggle, filter, sort, slideshow…).
- Người dùng nhấn mạnh:
  - “HTML/CSS/JS thuần”, “không dùng framework/thư viện”.
  - “Muốn luyện core FE”, “tối giản bundle”, “chạy được trên mọi trình duyệt hiện đại”.
- Bối cảnh:
  - Bài test, coding challenge, portfolio, dự án nhỏ, bài học.

Không dùng skill này khi:

- Người dùng yêu cầu cụ thể framework (React, Vue, Svelte, Angular…).
- Yêu cầu SSR phức tạp, routing nhiều trang, state management phức tạp → lúc đó nên chuyển sang skill FE framework.

## Goals

Khi skill này chạy, mục tiêu là tạo ra code FE thuần:

1. HTML:
   - Semantic, dễ đọc, chuẩn SEO & accessibility cơ bản (header, nav, main, section, article, footer, button, form, label…).
   - Cấu trúc rõ ràng, tách biệt khu vực header, content, footer, component.
   - Sử dụng id/class có ý nghĩa, tránh lạm dụng div.

2. CSS:
   - Responsive theo mobile-first, dùng Flexbox và Grid cho layout chính.
   - Tổ chức CSS rõ ràng: reset/normalize đơn giản, variables (custom properties), utility nhỏ nếu cần.
   - Ưu tiên CSS hiện đại (gap, clamp, minmax, box-shadow, transitions) nhưng vẫn chạy tốt trên browser phổ biến.
   - Hạn chế inline style, ưu tiên external CSS.

3. JavaScript:
   - Không sử dụng framework hoặc thư viện ngoài (trừ khi user yêu cầu).
   - Dùng ES6+ (const/let, arrow function, template literals, modules nếu phù hợp).
   - Tách code logic và DOM rõ ràng, tránh global pollution.
   - Tập trung vào:
     - DOM selection & manipulation.
     - Event handling (click, input, submit, scroll…).
     - State đơn giản trong JS (biến, object, array).
     - Async cơ bản (fetch API) if needed call API.

4. Chất lượng:
   - Code chạy được ngay nếu copy vào file .html.
   - Không tạo “AI slop”: tránh markup dư thừa, class vô nghĩa, UI quá generic.
   - Comment ngắn gọn, chỉ ở những đoạn logic khó.

## Workflow

Khi nhận yêu cầu dùng skill này, làm theo quy trình:

1. Phân tích yêu cầu
   - Xác định:
     - Mục tiêu trang/app (ví dụ: landing page giới thiệu dịch vụ, form đăng ký, todo list).
     - Đối tượng người dùng (desktop, mobile, cả hai).
     - Số lượng màn hình/section chính.
     - Mức độ tương tác (chỉ đọc → Form đơn giản → CRUD nhỏ trên local state).
   - Hỏi lại nếu thiếu:
     - Palette màu hoặc style (simple, modern, dark, corporate, playful…).
     - Ngôn ngữ hiển thị (vi/en/đa ngôn ngữ).
     - Có cần responsive cho mobile hay không (mặc định: có).

2. Thiết kế cấu trúc HTML
   - Phác thảo (bằng mô tả text) layout:
     - Header (logo, nav).
     - Main (hero, nội dung chính, sections).
     - Sidebar nếu cần.
     - Footer (info, links).
   - Đảm bảo:
     - Dùng semantic tag phù hợp.
     - Mỗi component có container với class rõ ràng.

3. Thiết kế CSS
   - Chọn approach:
     - Một file styles.css duy nhất cho dự án nhỏ.
   - Định nghĩa:
     - Root variables: màu, font-size base, spacing.
     - Layout chính với Flexbox/Grid.
     - Style cho component (button, card, form, navbar…).
   - Thêm:
     - Media queries cho mobile/tablet.
     - Hover state, focus state (accessibility).

4. Viết JavaScript
   - Liệt kê tất cả tương tác cần có: ví dụ
     - Mở/đóng menu mobile.
     - Validate form trước khi submit.
     - Thêm/xoá/sửa item (todo list, table row).
     - Filter/search trong list.
   - Với mỗi tương tác:
     - Chọn selector rõ ràng (data-* attribute hoặc class).
     - Gắn event listener.
     - Cập nhật DOM hoặc state tương ứng.
   - Đảm bảo:
     - Không dùng eval hoặc pattern không an toàn.
     - Xử lý error cơ bản.

5. Đầu ra
   - Nếu nhỏ: đưa 1 file HTML full (có `<style>` và `<script>` trong cùng file).
   - Nếu trung bình: tạo 3 khối code riêng:
     - index.html
     - styles.css
     - script.js
   - Hướng dẫn ngắn cách chạy:
     - “Lưu 3 file cùng thư mục, mở index.html bằng trình duyệt”.

## Style & Best Practices

- Ưu tiên **mobile-first**: viết CSS cho mobile trước, sau đó dùng media query cho màn hình lớn.
- HTML:
  - Sử dụng `alt` cho `img`.
  - Dùng `button` cho hành động, `a` cho link.
  - Với form: luôn gắn `label` cho `input`.
- CSS:
  - Tránh dùng fixed px cho mọi thứ, ưu tiên `rem`, `%`, `vh/vw`.
  - Không tạo class quá chung chung như `.red`, `.big`; dùng `.btn-primary`, `.text-muted`.
- JS:
  - Dùng `addEventListener`, tránh onclick inline trong HTML.
  - Chia nhỏ function theo nhiệm vụ.
  - Nếu dùng fetch, luôn xử lý `.catch` và error message cơ bản.

## Examples of tasks for this skill

Khi user yêu cầu dạng:

- “Tạo landing page giới thiệu sản phẩm X bằng HTML/CSS/JS thuần, responsive, có form đăng ký.”
- “Viết một trang todo list dùng localStorage, không dùng framework.”
- “Cho mình template CV cá nhân bằng HTML/CSS thuần, dễ chỉnh sửa.”
- “Làm giúp navbar có dropdown và menu mobile hamburger, thuần JS.”
- “Form đăng ký có validation cơ bản (email, password), báo lỗi dưới input.”

→ Dùng skill này để trả về code.

## Non-goals

Skill này **không** tập trung vào:

- Build tool phức tạp (Vite, Webpack) – chỉ dùng khi user yêu cầu rất rõ.
- SPA router, state management phức tạp.
- CSS framework nặng (Tailwind, Bootstrap…) trừ khi user nhắc rõ.
- SEO nâng cao, analytics, A/B testing, performance audit chuyên sâu.

## Tone & Explanation

Khi trả lời:

- Giữ giải thích ngắn gọn, tập trung vào code.
- Nếu user đang học, thêm 1–3 note giải thích key concept (ví dụ: vì sao dùng Flexbox, vì sao dùng event delegation).
- Tránh spam giải thích dài dòng, ưu tiên ví dụ thực tế.
