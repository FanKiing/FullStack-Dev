@extends('layouts.master')
@section('content')
    <h1>Listes des produits</h1>
    @foreach ($produits as $p)
        <p>{{$p->nom}} - {{$p->prix}}£</p>
    @endforeach
@endsection
