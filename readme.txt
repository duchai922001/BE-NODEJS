Viết API theo RESTFUL API
- Method: GET, POST, DETELE, PUT
- Status: 200- thành công, 201: CREATE, 404: Không tìm thấy...

- folder configs: sẽ config cấu hình cho database, hình ảnh,...
- controllers: mục đích nhận data và điều tới service(use-case) để nó xử lý
- services: xử lý request (username, password => createUser(username, password)) 
- repository: chọc tới Database để xử lý 
User: 
createUser(): Model.create(username, password)
findUserByEmail()

- folder DTO: nhận đầu vào username: string, password: string, email, phone: number

- folder middlewares: xử lý verifyToken

- routers: định nghĩa endpoint

- models: sẽ định nghĩa bảng SQL (bảng table) - mySQL, SQL server,...  NoSQL (Collection) - mongoDB

- utils: chứa các file dùng chung cho dự án

- enums: định nghĩa những biến trong dự án

- Viết api: register
- DTO - router - controller - service (repository)

 + enums, exception dinh nghia truoc r