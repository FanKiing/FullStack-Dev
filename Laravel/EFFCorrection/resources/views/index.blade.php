<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Liste des séminaires</title>
</head>
<body>
    <h1>Liste des séminaires</h1>

    @if(session('success'))
        <p style="color: green">{{ session('success') }}</p>
    @endif

    <a href="{{ route('seminaires.create') }}">Consulter / Ajouter</a>

    <table border="1" cellpadding="8">
        <thead>
            <tr>
                <th>Thème</th>
                <th>Date début</th>
                <th>Date fin</th>
                <th>Description</th>
                <th>Coût journalier</th>
                <th>Animateur_id</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach($seminaires as $seminaire)
                <tr>
                    <td>{{ $seminaire->theme }}</td>
                    <td>{{ $seminaire->date_debut }}</td>
                    <td>{{ $seminaire->date_fin }}</td>
                    <td>{{ $seminaire->description }}</td>
                    <td>{{ $seminaire->cout_journalier }}</td>
                    <td>{{ $seminaire->animateur_id }}</td>
                    <td>
                        <a href="{{ route('seminaires.show', $seminaire->id) }}">Consulter</a>
                        <a href="#">Modifier</a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>