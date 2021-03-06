@extends('layout.app')

@section('content')
    <div class="short-content">
        <div class="container">
            <div class="columns">
                <div class="column is-8 is-offset-2">
                    <div class="box">
                        <h3 class="title is-4">Login</h3>
                        <div class="box-body">
                            @if($errors->has('provider'))
                                <div class="alert alert-danger mb-3">
                                    {{ $errors->first('provider') }}
                                </div>
                            @endif

                            <form class="form-horizontal" role="form" method="POST" action="{{ route('login') }}">
                                @include('partials.login-form', ['validate' => true, 'show_social_login' => true])
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
