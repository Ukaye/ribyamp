*created_by(aggregator|agent)
user:   {
    id:,
    firstname:,
    lastname:,
    email:,
    phone:,
    password:,
    access:(1->boi|2->pmo|3->amo|4->aggregator|5->lead_aggregator|6->agent),
    created_time:,
    modified_time:
    }
member: {
    user_id:,
    association_id:,
    created_by:
    }
agent:  {
    user_id:,
    aggregator_id:,
    created_by:
    }
association: {
    name:,
    email:,
    mou:(document_id);
    lga:,
    state:,
    created_by:,
    created_date:
    }
aggregator: {
    user_id:,
    region:(state),
    company_name:,
    company_address:,
    created_by:
    }
lead_aggregator:{
    user_id:,
    region:(state),
    company_name:,
    company_address:,
    created_by:
    }
superadmin: {
    user_id:,
    type:(BOI|PMO|AMO),
    role:(admin|viewer),
    created_by:
    }
admin: [
    aggregator(array) + superadmin(array)
    ]
document: {
    id:,
    path:,
    ext:(pdf|csv|txt),
    type:(MoU|CSV),
    filename:
    created_by:,
    created_time:
    }