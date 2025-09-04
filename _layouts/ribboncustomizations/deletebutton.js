SP.SOD.executeFunc('sp.js', 'SP.ClientContext', CallClientOM);

function CallClientOM(listid,itemid) {
    var targetListGuid = listid;

    if (targetListGuid) {
        this.guid = new SP.Guid(targetListGuid);
        var context = SP.ClientContext.get_current();
        var lists = context.get_web().get_lists();
        var list = lists.getById(this.guid);

        //Set workflows variable to load and be accessible in callbacks
        this.workflows = list.get_workflowAssociations();
        context.load(this.workflows);
        context.executeQueryAsync(Function.createDelegate(this, onQuerySucceeded), Function.createDelegate(this, onQueryFailed));

    }



    function onQuerySucceeded(sender, args) {
        var enumerator = this.workflows.getEnumerator();
        while (enumerator.moveNext()) {
            var workflow = enumerator.get_current();
            if (workflow.get_name() == "Page Deletion Approval Workflow") {
                var currentUrl = window.location.href;
                currentUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/Pages'));
                var url = currentUrl + "/_layouts/IniWrkflIP.aspx?List=" + listid + "&ID=" + itemid + "&TemplateID={" + workflow.get_id() + "}";
                window.location = url;
            }
        }
    }

    function onQueryFailed(sender, args) {
        alert('request failed ' + args.get_message() + '\n' + args.get_stackTrace());
    }
}