# 使用官方 Node.js 16 作为基础镜像
FROM node:18

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 文件
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制所有文件到工作目录
COPY . .

# 构建应用
RUN npm run build

# 使用 Nginx 作为基础镜像
FROM nginx:alpine

# 复制构建的文件到 Nginx 的 html 目录
COPY --from=0 /app/.next /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
