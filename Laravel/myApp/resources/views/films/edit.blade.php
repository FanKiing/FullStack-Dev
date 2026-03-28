@extends('layouts.master')

@section('title', 'Edit Film')

@section('content')
    <div class="card">
        <div class="card-header">
            <h2>Edit Film: {{ $film->title }}</h2>
        </div>
        <div class="card-body">
            <form action="{{ route('films.update', $film) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                
                <div class="mb-3">
                    <label for="title" class="form-label">Title *</label>
                    <input type="text" class="form-control @error('title') is-invalid @enderror" 
                           id="title" name="title" value="{{ old('title', $film->title) }}" required>
                    @error('title')
                        <div class="invalid-feedback">{{ $message }}</div>
                    @enderror
                </div>

                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control @error('description') is-invalid @enderror" 
                              id="description" name="description" rows="4">{{ old('description', $film->description) }}</textarea>
                    @error('description')
                        <div class="invalid-feedback">{{ $message }}</div>
                    @enderror
                </div>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="duration" class="form-label">Duration (minutes) *</label>
                        <input type="number" class="form-control @error('duration') is-invalid @enderror" 
                               id="duration" name="duration" value="{{ old('duration', $film->duration) }}" required>
                        @error('duration')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>

                    <div class="col-md-6 mb-3">
                        <label for="release_date" class="form-label">Release Date *</label>
                        <input type="date" class="form-control @error('release_date') is-invalid @enderror" 
                               id="release_date" name="release_date" value="{{ old('release_date', $film->release_date->format('Y-m-d')) }}" required>
                        @error('release_date')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>
                </div>

                <div class="mb-3">
                    <label for="poster" class="form-label">Poster</label>
                    @if($film->poster)
                        <div class="mb-2">
                            <img src="{{ Storage::url($film->poster) }}" alt="Current poster" style="height: 100px;">
                        </div>
                    @endif
                    <input type="file" class="form-control @error('poster') is-invalid @enderror" 
                           id="poster" name="poster" accept="image/*">
                    @error('poster')
                        <div class="invalid-feedback">{{ $message }}</div>
                    @enderror
                </div>

                <div class="mb-3">
                    <label for="category_id" class="form-label">Category *</label>
                    <select class="form-control @error('category_id') is-invalid @enderror" 
                            id="category_id" name="category_id" required>
                        <option value="">Select Category</option>
                        @foreach($categories as $category)
                            <option value="{{ $category->id }}" {{ old('category_id', $film->category_id) == $category->id ? 'selected' : '' }}>
                                {{ $category->name }}
                            </option>
                        @endforeach
                    </select>
                    @error('category_id')
                        <div class="invalid-feedback">{{ $message }}</div>
                    @enderror
                </div>

                <div class="mb-3">
                    <label class="form-label">Actors and Salaries</label>
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Actor</th>
                                    <th>Salary ($)</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($actors as $actor)
                                    @php
                                        $pivotSalary = $film->actors->where('id', $actor->id)->first();
                                        $salary = $pivotSalary ? $pivotSalary->pivot->salary : null;
                                    @endphp
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <input class="form-check-input actor-checkbox" type="checkbox" 
                                                       name="actors_selected[]" value="{{ $actor->id }}" 
                                                       id="actor_{{ $actor->id }}"
                                                       {{ $salary ? 'checked' : '' }}>
                                                <label class="form-check-label" for="actor_{{ $actor->id }}">
                                                    {{ $actor->name }}
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <input type="number" class="form-control actor-salary" 
                                                   name="actors[{{ $actor->id }}]" 
                                                   value="{{ $salary }}"
                                                   {{ $salary ? '' : 'disabled' }}>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="d-flex justify-content-between">
                    <a href="{{ route('films.index') }}" class="btn btn-secondary">Cancel</a>
                    <button type="submit" class="btn btn-primary">Update Film</button>
                </div>
            </form>
        </div>
    </div>
@endsection

@push('scripts')
<script>
    $(document).ready(function() {
        $('.actor-checkbox').change(function() {
            var actorId = $(this).val();
            var salaryInput = $('input[name="actors[' + actorId + ']"]');
            
            if ($(this).is(':checked')) {
                salaryInput.prop('disabled', false);
                salaryInput.attr('required', true);
            } else {
                salaryInput.prop('disabled', true);
                salaryInput.removeAttr('required');
                salaryInput.val('');
            }
        });
    });
</script>
@endpush