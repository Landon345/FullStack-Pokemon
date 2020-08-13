<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\User;

class TestMail extends Mailable
{
    use Queueable, SerializesModels;
    public $user;
    public $test;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        //
        $this->user = $user;
        $this->test = "this is the test text";
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('notImportant@gmail.com')->view('emails.confirm');
        //return $this->subject('Mail from pokedex')->view('emails.TestMail');
    }
}

