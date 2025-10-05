<?php

namespace App\Enums;

enum FormStatus: string
{
    case Draft = 'draft';
    case Pending = 'pending';
    case Revising = 'revising';
    case Approved = 'approved';
    case Rejected = 'rejected';
    case Finalized = 'finalized';
}