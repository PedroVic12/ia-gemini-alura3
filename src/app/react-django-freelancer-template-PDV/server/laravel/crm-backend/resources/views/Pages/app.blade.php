<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Aplicação Laravel</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="{{ asset('js/app.js') }}" defer></script>
</head>
<body>
    <header class="bg-primary text-white p-3">
        <div class="container">
            <h1>Logo da Empresa</h1>
            <nav>
                <a href="/" class="text-white">Home</a>
                <a href="/materiais" class="text-white">Materiais</a>
            </nav>
        </div>
    </header>

    <main class="container mt-4">
        @yield('content')
    </main>

    <footer class="bg-dark text-white p-3 mt-4">
        <div class="container">
            <p>&copy; 2024 Minha Empresa</p>
        </div>
    </footer>
</body>
</html>
