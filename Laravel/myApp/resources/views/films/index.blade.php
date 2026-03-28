@extends('layouts.master')

@section('title', 'Film List')

@section('content')
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h1>Film List</h1>
        <a href="{{ route('films.create') }}" class="btn btn-primary">
            <i class="fas fa-plus"></i> Add New Film
        </a>
    </div>

    {{-- Filter Section --}}
    <div class="card mb-4">
        <div class="card-body">
            <h5 class="card-title">Filter by Category</h5>
            <select id="categoryFilter" class="form-select w-25">
                <option value="">All Categories</option>
                @foreach($categories as $category)
                    <option value="{{ $category->id }}">{{ $category->name }}</option>
                @endforeach
            </select>
        </div>
    </div>

    <div id="filmsList">
        @include('films._film_list', ['films' => $films])
    </div>
@endsection

@push('scripts')
<script>
    $(document).ready(function() {
        $('#categoryFilter').change(function() {
            var categoryId = $(this).val();
            
            $.ajax({
                url: '{{ route("films.filter") }}',
                type: 'POST',
                data: {
                    category_id: categoryId,
                    _token: '{{ csrf_token() }}'
                },
                success: function(data) {
                    $('#filmsList').html(data);
                },
                error: function(xhr) {
                    console.error('Error:', xhr);
                }
            });
        });
    });
</script>
@endpush