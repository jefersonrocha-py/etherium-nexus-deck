# 🐳 Docker Deploy - Etherium Nexus Deck

## 📋 Pré-requisitos

- Docker instalado (versão 20.10+)
- Docker Compose instalado (versão 2.0+)

## 🚀 Deploy Rápido

### 1. Build e executar com Docker Compose

```bash
# Build e inicia o container
docker-compose up -d --build

# Visualizar logs
docker-compose logs -f

# Parar o container
docker-compose down
```

A aplicação estará disponível em: **http://localhost**

### 2. Build e executar com Docker (sem compose)

```bash
# Build da imagem
docker build -t etherium-nexus-deck .

# Executar o container
docker run -d -p 80:80 --name etherium-app etherium-nexus-deck

# Visualizar logs
docker logs -f etherium-app

# Parar o container
docker stop etherium-app
docker rm etherium-app
```

## 🔧 Comandos Úteis

### Reconstruir a imagem
```bash
docker-compose build --no-cache
```

### Reiniciar o container
```bash
docker-compose restart
```

### Ver status dos containers
```bash
docker-compose ps
```

### Acessar o container
```bash
docker-compose exec app sh
```

### Limpar recursos Docker
```bash
# Remove containers parados
docker-compose down

# Remove imagens não utilizadas
docker image prune -a

# Limpeza completa
docker system prune -a --volumes
```

## 🌐 Deploy em Produção

### Porta customizada
Edite o `docker-compose.yml` e altere a porta:
```yaml
ports:
  - "8080:80"  # Sua porta:80
```

### Variáveis de ambiente
Adicione variáveis no `docker-compose.yml`:
```yaml
environment:
  - NODE_ENV=production
  - API_URL=https://sua-api.com
```

## 📊 Health Check

O container possui health check configurado:
```bash
# Verificar saúde do container
docker-compose ps
```

Endpoint de health check: **http://localhost/health**

## 🔐 Melhorias de Segurança para Produção

1. **HTTPS**: Use um reverse proxy (Traefik, Nginx Proxy Manager)
2. **Firewall**: Configure UFW ou iptables
3. **Limitar recursos**: Adicione no docker-compose.yml:
   ```yaml
   deploy:
     resources:
       limits:
         cpus: '0.5'
         memory: 512M
   ```

## 📦 Estrutura dos Arquivos

- `Dockerfile` - Multi-stage build otimizado
- `docker-compose.yml` - Orquestração do container
- `nginx.conf` - Configuração do servidor web
- `.dockerignore` - Arquivos excluídos do build

## 🐛 Troubleshooting

### Porta 80 já em uso
```bash
# Verificar o que está usando a porta
sudo lsof -i :80

# Ou usar outra porta no docker-compose.yml
ports:
  - "8080:80"
```

### Build falhou
```bash
# Limpar cache e rebuildar
docker-compose build --no-cache
```

### Container não inicia
```bash
# Ver logs detalhados
docker-compose logs app
```
