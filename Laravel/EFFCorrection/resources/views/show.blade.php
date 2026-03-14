<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Détail du séminaire</title>
</head>
<body>
    <h1>Détails du séminaire : {{ $seminaire->id }}</h1>

    <table border="1" cellpadding="8">
        <tr>
            <th>Thème</th>
            <td>{{ $seminaire->theme }}</td>
        </tr>
        <tr>
            <th>Date début</th>
            <td>{{ $seminaire->date_debut }}</td>
        </tr>
        <tr>
            <th>Date fin</th>
            <td>{{ $seminaire->date_fin }}</td>
        </tr>
        <tr>
            <th>Description</th>
            <td>{{ $seminaire->description }}</td>
        </tr>
        <tr>
            <th>Coût journalier</th>
            <td>{{ $seminaire->cout_journalier }}</td>
        </tr>
        <tr>
            <th>Animateur</th>
            <td>{{ $seminaire->animateur->nom_complet }}</td>
        </tr>
    </table>

    <h2>Liste des activités assurées</h2>
    <table border="1" cellpadding="8">
        <thead>
            <tr>
                <th>Nom de l’activité</th>
                <th>Description de l’activité</th>
            </tr>
        </thead>
        <tbody>
            @foreach($seminaire->activites as $activite)
                <tr>
                    <td>{{ $activite->nom_activite }}</td>
                    <td>{{ $activite->description }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

    <a href="{{ route('seminaires.index') }}">Retour</a>
</body>
</html>